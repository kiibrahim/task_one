<template>
    <div>
        <div class="chart1">
            <!-- displaying the chart -->
            <canvas id="myChart" width="600" height="400"></canvas>
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
        //connect to the server side
        async function chartDailyAmount() {
            const url = "http://localhost:8082/";
            let response = await axios.get(url);
            return response.data;
        }
        //get each day data for labeling
        chartDailyAmount().then((data) => {
            var myLabels = data.map(function (index) {
                return index.day;
            });
            console.log(myLabels)
            //get each day's sale
            var myData = data.map(function (index) {
                return index.sale
            });
            console.log(myData)
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: myLabels,
                    datasets: [{
                        label: '# of sales',
                        data: myData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(05, 69, 172, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)',
                            'rgba(15, 59, 162, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(134, 39, 142, 1)',
                            'rgba(45, 49, 152, 1)'
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

        const ctx = document.getElementById('myChart'); 

    }
}
</script>
<style>
</style>