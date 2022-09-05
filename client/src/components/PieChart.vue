<template>
    <div>
            <canvas id="myChart2" width="600" height="400"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js';
import axios from 'axios';

export default {
    name: 'pieChart',
    mounted() {
        async function productData() {
            const url = "http://localhost:8082/product";
            let response = await axios.get(url);
            return response.data;
        }

        productData().then((datas) => {
          
            var myLabels = datas.map(function (index) {
                return index.name;
            });
            console.log(myLabels)
            var myData = datas.map(function (index) {
                return index.sale
            });
            console.log(myData)
            const data = {
                labels: myLabels,
                datasets: [{
                    label: 'My First Dataset',
                    data: myData,
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
        });
        const ctx2 = document.getElementById('myChart2');
    }
}
</script>
<style>

</style>