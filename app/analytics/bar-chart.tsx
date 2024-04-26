"use client";

import "chart.js/auto";
import { Line } from 'react-chartjs-2';

type Props = {
    counts: number[];
    days: string[];
    type: string;
}

export const BarChart = ({
    counts,
    days,
    type
}: Props) => {
    
    const backgroundColors = type === "success" ? 'rgba(34,197,94, 0.8)' : 'rgba(239, 68, 68, 0.8)';

    return(
        <div className="w-[40vw]">
            <Line 
                data={{
                    labels: days.map((bal) => bal),
                    datasets: [
                        {
                            label: type === "success" ? "Success" : "Failure",
                            data: counts.map((c) => c),
                            pointStyle: "circle",
                            cubicInterpolationMode: 'monotone',
                            pointRadius: 7,
                            borderColor: 'black',
                            backgroundColor: backgroundColors
                        }
                    ]
                }}
            />
        </div>
    )
}