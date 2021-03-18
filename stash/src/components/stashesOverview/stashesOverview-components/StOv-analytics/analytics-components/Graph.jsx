import React, { useEffect } from 'react'
import Chart from 'chart.js'
import { csv } from 'd3'
import { orange } from '@material-ui/core/colors'
// import './test.csv'

function Graph() {
    const getData = async () => {
        const response = await fetch('testing.txt')
        const test = await response.text()
        console.log(response)
        console.log(test)
    }

    useEffect(() => {
        // getData()
    }, [])

    useEffect(() => {
        const stashColor = getComputedStyle(document.documentElement).getPropertyValue(
            '--off-red'
        )

        var dataArray1 = []
        var dataArray2 = []
        var dataArray3 = []
        for (let i = 0; i < 20; i++) {
            dataArray1.push(Math.ceil(Math.random() * 20))
            dataArray2.push(Math.ceil(Math.random() * 50))
            dataArray3.push(Math.ceil(Math.random() * 50))
        }
        var ctx = document.getElementById('myChart').getContext('2d')
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dataArray1,
                datasets: [
                    // stashColor + '0d'
                    {
                        label: '# of Votes',
                        data: dataArray1,
                        backgroundColor: stashColor + '1d',
                        borderColor: stashColor,
                        borderWidth: 1,
                    },
                    {
                        label: '# of Votes',
                        data: dataArray2,
                        backgroundColor: stashColor + '1d',
                        borderColor: '#f1d234',
                        borderWidth: 1,
                    },
                    {
                        label: '# of Votes',
                        data: dataArray3,
                        backgroundColor: stashColor + '1d',
                        borderColor: '#ff23f0',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        })
    }, [])
    return (
        <>
            <canvas id='myChart' height='100'>
                Your browser does not support the canvas
            </canvas>
        </>
    )
}

export default Graph
