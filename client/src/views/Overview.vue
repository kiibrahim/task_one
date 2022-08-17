<template>
    <div class="overview">
        <Chart></Chart>
        <Data></Data>

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
</style>