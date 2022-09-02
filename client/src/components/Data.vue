<template>
    <div class="data">

        <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Sale</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in datas">
                    <td>{{ data.day }}</td>
                    <td>{{ data.Sale }}</td>
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
        axios.get('http://localhost:8082/').then((response) => {
            //console.log(response.data)
            this.datas = response.data
        })
    }
}
</script>
<style scoped>
data {
    margin-left: auto;
    margin-right: auto;
}

table {
    margin-left: 180px;
    margin-right: auto;
    font-family: 'Open Sans', sans-serif;
    width: 750px;
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
</style>
