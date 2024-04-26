import { getCountData, getTemplateTypeCounts } from "@/db/queries";
import { BarChart } from "./bar-chart";
import { Separator } from "@/components/ui/separator";
import {format} from 'date-fns';
import { PieChart } from "./pie-chart";

const AnalyticsPage = async () => {

    const countData = getCountData();
    const templateCountsData = getTemplateTypeCounts();

    const [count, templateCounts] = await Promise.all([countData, templateCountsData]);

    const successCounts = [] as number[];
    const failureCounts = [] as number[];
    const templateCount = [templateCounts.templateOneCount, templateCounts.templateTwoCount];
    const days = [] as string[];

    count.data?.map((c) => {
        successCounts.push(c.successCount);
        failureCounts.push(c.failureCount);
        days.push(c.day);
    })

    return (  
        <div className="flex flex-col gap-16 px-24">
            <div className="flex gap-10 items-center justify-between pt-10">
                <div className="flex flex-col gap-2 w-[40%]">
                    <h1 className="text-2xl text-green-700 font-semibold">Successful Email Sends</h1>
                    <p className="text-muted-foreground">
                        This graph illustrates the number of emails that were successfully sent without errors or delivery issues over a specified time period. It provides insights into the effectiveness of your email campaigns and the reliability of your email delivery system.
                    </p>
                </div>
                <BarChart 
                    type="success"
                    counts={successCounts}
                    days={days}
                />
            </div>
            <Separator />
            <div className="flex gap-8 items-center justify-evenly">
                <BarChart 
                    type="failure"
                    counts={failureCounts}
                    days={days}
                />
                <div className="flex flex-col gap-2 w-[40%] text-end">
                    <h1 className="text-2xl text-red-600 font-semibold">Unsuccessful Email Sends</h1>
                    <p className="text-muted-foreground">
                        This graph displays the count of emails that failed to send or encountered delivery issues within a given timeframe. It highlights any issues or challenges in email delivery, helping to identify areas for improvement and troubleshooting.
                    </p>
                </div>
            </div>
            <Separator />
            <div className="flex gap-8 items-center justify-evenly pb-10">
                <div className="flex flex-col gap-2 w-[40%]">
                    <h1 className="text-2xl font-semibold">Email Template Usage</h1>
                    <p className="text-muted-foreground">
                        This graph tracks the frequency of each email template used by you, showing how often specific templates are employed. It aids in understanding the popularity and effectiveness of different email formats, guiding decisions on template optimization and content strategy.
                    </p>
                </div>
                <PieChart 
                    templateCount={templateCount}
                />
            </div>
        </div>
    );
}
 
export default AnalyticsPage;