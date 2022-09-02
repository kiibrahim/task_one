<template>
    <div class="overview">
        <Chart></Chart>
        <Data class="data"></Data>

    </div>
</template>
<script>
import Chart from '@/components/Chart'
import Data from '@/components/Data'
export default {
    components:{
        Chart,
        Data
    }
}
</script>
<style scoped>
  .overview{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 5fr 3fr;
  }
  .data{  margin-left: auto;
    margin-right: auto;}
</style>