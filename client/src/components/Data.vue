<template>
    <div class="data">
        <!-- Table for showcasing the data -->
        <table id="weekTable">
            <thead>
                <h4>Daily Sales Report</h4>
                <tr>
                    <th>Day</th>
                    <th>Sale</th>
                </tr>
            </thead>
            <tbody>
                <!-- for lopp to get each data individually -->
                <tr v-for="data in datas">
                    <td>{{ data.day }}</td>
                    <td>{{ data.sale }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            datas: []
        }
    },
    mounted() {
        //connect to the server
        axios.get('http://localhost:8082/').then((response) => {
            //console.log(response.data)
            this.datas = response.data
        })
    }
}
</script>
<style scoped>
.data {
    margin-left: auto;
    margin-right: auto;
}

table {
    margin-right: auto;
    font-family: 'Open Sans', sans-serif;
 
    border-collapse: collapse;
    border: 3px solid #44475C;
    margin: 10px 10px 0 10px;
}

table th {
    text-transform: uppercase;
    text-align: left;
    background: #44475C;
    color: #FFF;
    padding: 8px;
    min-width: 30px;
}

table td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid #7D82A8;
}

table td:last-child {
    border-right: none;
}

table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
}
.data {
    box-sizing: border-box;
    align-items: center;
    border: 1px solid black;
    margin: auto;
    padding: 20px;
}
#weekTable{
    width: 500px;
    margin: 10px 10px;
    
}
#productTable{
    width: 500px;
    margin: 10px 10px;
   
}
</style>
