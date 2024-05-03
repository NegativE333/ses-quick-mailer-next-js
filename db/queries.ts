import { db } from "@/lib/db";
import { cache } from "react";
import {format} from 'date-fns';

export const getCountData = cache(async () => {
    const analyticsData = await db.analytics.groupBy({
        by: ['day'], // Group by the 'day' field
        _sum: {
            successCount: true,
            failureCount: true
        }
    });

    const formattedData = analyticsData.map(entry => {
        const date = new Date(entry.day);
        const formattedDay = format(date, 'dd MMM');

        return {
            day: formattedDay,
            successCount: entry._sum.successCount || 0,
            failureCount: entry._sum.failureCount || 0
        };
    });

    formattedData.sort((a, b) => {
        // Convert 'day' strings back to Date objects for comparison
        const dateA = new Date(a.day);
        const dateB = new Date(b.day);

        return dateA.getTime() - dateB.getTime();
    });

    return { data: formattedData };
});



export const getTemplateTypeCounts = cache(async () => {
    const templateCounts = await db.analytics.findMany({
        select: {
            templateCount: true
        }
    });

    let templateOneCount = 0;
    let templateTwoCount = 0;

    templateCounts.map((tc) => {
        if(tc.templateCount === 1){
            templateOneCount++;
        }
        else{
            templateTwoCount++;
        }
    })

    return {templateOneCount: templateOneCount, templateTwoCount: templateTwoCount};
});