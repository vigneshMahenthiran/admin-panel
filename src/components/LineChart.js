import React from "react";
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function LineChart(){
    const chartData = {
        labels :  ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets:[{
            label :'revenue',
            data : [500, 600, 800, 700, 900, 1000],
            fill: true,
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.2)",
        }]
    }

    return(
        <div >
            <Line data={chartData}/>
        </div>
    )
}

export default LineChart