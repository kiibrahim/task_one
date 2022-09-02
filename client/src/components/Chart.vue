<template>
    <div>
        <h1>Welcome,User!</h1>
        <h2>Dashboard</h2>
        <div class="chart">
            <div class="chart1">
                <canvas id="myChart" width="600" height="400"></canvas>
            </div>
            <div class="chart2">
                <canvas id="myChart2" width="600" height="400"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import axios from 'axios';

export default {
    name: 'chart',
    data() {
        return {
            
        }
    },
    mounted() {
        
        // let xData = []
        // let yData = []
        
        async function status() {
            const url = "http://localhost:8082/";
            let response = await axios.get(url);
            return response.data;
        }

        status().then((data) => {
            //console.log(data)
            // for (let each = 0; each < data.length; each++) {
            //     xData.push(data[each].day)
            //     yData.push(data[each].Sale)
            // }
            var myLabels = data.map(function(e) {
                return e.day;
            });
            console.log(myLabels)
            var myData = data.map(function(e){
                return e.Sale
            });
            console.log(myData)
            const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: myLabels,
                datasets: [{
                    label: '# of sales',
                    data: myData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(134, 39, 142, 0.2)',
                        'rgba(45, 49, 152, 0.2)',
                        'rgba(15, 59, 162, 0.2)',
                        'rgba(05, 69, 172, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(134, 39, 142, 1)',
                        'rgba(45, 49, 152, 1)',
                        'rgba(15, 59, 162, 1)',
                        'rgba(05, 69, 172, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        });
        //console.log(xData)
        //console.log(yData)

        const ctx = document.getElementById('myChart');
        const ctx2 = document.getElementById('myChart2');

        //console.log(myLabels)

        
        const data = {
            labels: [
                'Chemical',
                'Device',
                'Service'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const myChart2 = new Chart(ctx2, {
            type: 'doughnut',
            data: data,
        });

    }
}
</script>
<style>
.chart {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 12fr 1fr;
    grid-template-columns: 2fr 1fr;
    border: 1px solid black;
}
</style>