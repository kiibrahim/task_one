<template>
    <div >
        <h1>Welcome,User!</h1>
        <h2>Dashboard</h2>
        <router-link to='dashboard' tag="button" class="logout">
            <div class="link_container">
                To Daily Overview
            </div>
        </router-link>
        <div class="overview">
        <div class="chart">
            <PieChart></PieChart>
        </div>
        <Productdata class="data"></Productdata>
    </div>
        
 </div>
</template>
<script>
import Chart from '@/components/Chart'
import Data from '@/components/Data'
import Productdata from '@/components/Productdata'

import PieChart from '../components/PieChart.vue'
export default {
    components:{
    Chart,
    Data,
    PieChart,
    Productdata
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