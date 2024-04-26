"use client";

import "chart.js/auto";
import { Line, Pie } from 'react-chartjs-2';

type Props = {
    templateCount: number[];
}

export const PieChart = ({
    templateCount
}: Props) => {
    const backgroundColors = ['#FD7668', '#5B84B2'];
    const templateNames = ['Link', 'Image']
    return(
        <div className="w-[30vw]">
            <Pie 
                data={{
                    labels: templateNames,
                    datasets: [
                        {
                            label: 'Template Used',
                            data: templateCount.map((c) => c),
                            borderColor: 'white',
                            backgroundColor: backgroundColors,
                            borderJoinStyle: 'miter',
                            borderWidth: 3,
                            borderAlign: 'center'
                        }
                    ]
                }}
            />
        </div>
    )
}