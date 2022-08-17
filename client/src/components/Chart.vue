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

export default {
    mounted(){
        const ctx = document.getElementById('myChart');
        const ctx2 = document.getElementById('myChart2');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# of sales',
            data: [12, 19, 3, 5, 2, 3,5,3,7,1,9,4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)','rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
.chart{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 12fr 1fr;
    grid-template-columns: 12fr 6fr;
    border: 1px solid black;
}
</style>