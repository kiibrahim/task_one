<template>
    <div >
        <h1>Welcome,User!</h1>
        <h2>Dashboard</h2>
        <router-link to="product" tag="button">
            <div class="link_container">
                To Product Overview
            </div>
        </router-link>
        <router-link to="table" tag="button">
            <div class="link_container">
                To add data
            </div>
        </router-link>
        <div class="overview">
        <div class="chart">
            <Chart></Chart>
        </div>
        <Data class="data"></Data>
    </div>
        
 </div>
</template>
<script>
import Chart from '@/components/Chart'
import Data from '@/components/Data'
import PieChart from '../components/PieChart.vue';
export default {
    components:{
    Chart,
    Data,
    PieChart
}
}
</script>
<style scoped>
  .overview{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    
  }
  .data{  
    height: auto;
width: auto;}

.chart{
    margin: auto;
    max-width: 9000px;

}
</style>