import { db } from "@/lib/db";
import { cache } from "react";

export const getCountData = cache(async () => {
    const analyticsData = await db.analytics.groupBy({
        by: ['day'], // Group by the 'day' field
        _sum: {
            successCount: true,
            failureCount: true
        }
    });

    const groupedData = analyticsData.map(entry => ({
        day: entry.day,
        successCount: entry._sum.successCount || 0,
        failureCount: entry._sum.failureCount || 0
    }));

    return { data: groupedData };
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