<template>
    <div>
        <h1>Welcome,User!</h1>
        <h2>Search</h2>
        <form>
            <input type="text" v-model="TimeStamp" placeholder="Timestamp" id="timeStamp" required /><br />
            <button @click="search" type="submit">
                Search
            </button>
        </form><br />
        <!-- //dropdown -->
        <select @change="onChange($event)">
            <option value="noFilter">No Filter</option>
            <option value="dateAscending">Date Ascending</option>
            <option value="dateDescending">Date Descending</option>
        </select>
        <table id="weekTable">
            <thead>
                <h4>Daily Sales Report</h4>
                <tr>
                    <th>Entry Timestamp</th>
                    <th>Day</th>
                    <th>UserId</th>
                    <th>Sales</th>
                    <th>TimeStamp</th>
                </tr>
            </thead>
            <tbody>
                <!-- for lopp to get each data individually -->
                <tr v-for="data in datas">
                    <td>{{ data.entryTimestamp }}</td>
                    <td>{{ data.randomNumber }}</td>
                    <td>{{ data.UserId }}</td>
                    <td>{{ data.Sales }}</td>
                    <td>{{ data.Timestamp }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            datas: []
        }
    },
    methods: {
        search() {
            let timeStamp = this.TimeStamp
            axios.get(`http://localhost:8082/sorttable/${timeStamp}`).then((response) => {
                this.datas = response.data
                console.log(this.datas)

            })
        },
        onChange(event) {
            if (event.target.value == 'noFilter') {
                console.log("noFilter")
            }
            else if (event.target.value == 'dateAscending') {
                let timeStamp = this.TimeStamp
                axios.get(`http://localhost:8082/sorttable/dateA/${timeStamp}`).then((response) => {
                        this.datas = response.data
                        console.log(this.datas)
                })
            }
            else if (event.target.value == 'dateDescending') {
                let timeStamp = this.TimeStamp
                axios.get(`http://localhost:8082/sorttable/dateD/${timeStamp}`).then((response) => {
                        this.datas = response.data
                        console.log(this.datas)
                })
            }
        }

    },
}


</script>
<style>
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
    background: #97bf0d;
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

#weekTable {
    width: 500px;
    margin: auto;

}
</style>