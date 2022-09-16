<template>
    <div class="data">
        <h1>Welcome,User!</h1>
        <h2>Add Data Here</h2>
        <form>
            <input type="text" v-model="randomNumbers" /><br />
            <input type="text" v-model="UserId" required /><br />
            <input type="text" v-model="Sales" required /><br /><br />
            <label for="dateStamps">Choose Start and Ending Dates:</label>
            <div id="dateStamps">
                <date-range-picker v-model="pickerDates">
                    <template v-slot:input="picker" style="min-width: 350px;">{{ pickerDates.startDate | date }} - {{
                    pickerDates.endDate | date }}</template>
                </date-range-picker>
            </div>
            <button @click="post() ; call()" type="submit">
                Add Data
            </button>
        </form><br />

        <!-- Table for showcasing the data -->
        <table id="weekTable">
            <thead>
                <h4>User Details</h4>
                <tr>
                    <th>Entry Timestamp</th>
                    <th>Random Number</th>
                    <th>UserId</th>
                    <th>Sales</th>
                    <th>TimeStamp</th>
                    <th>Exit Timestamp</th>

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
                    <td>{{ data.exitTimestamp }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
    name: "Table",
    components: {
        DateRangePicker
    },
    data() {
        const startDate = new Date()
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 6);
        return {
            datas: [],
            randomNumbers: '',
            UserId: "DE " + '',
            Sales: '',
            TimeStamp: '',
            pickerDates: {
                startDate,
                endDate
            }
        }
    },
    methods: {
        //to post the data to  the server
        post() {
            axios.post('http://localhost:8082/table', {
                randomNumber: this.randomNumbers,
                UserId: this.UserId,
                Sales: this.Sales,
                Timestamp: this.TimeStamp,
                entryTimestamp: this.pickerDates.startDate.toISOString().split('T')[0],
                exitTimestamp: this.pickerDates.endDate.toISOString().split('T')[0]
            })
        },
        //to fetch the data from server
        getPost() {
            axios.get('http://localhost:8082/table').then((response) => {
                //console.log(response.data)
                this.datas = response.data
            })
        },
        //to show in the data table right after the insert a new user
        refreshData() {
            axios.get('http://localhost:8082/table')
                .then((response) => {
                    this.datas = response.data
                });
        },
        //to insert new random number and new timestamp
        insertData() {
            let random = Math.floor(100000 + Math.random() * 900000)
            this.randomNumbers = random

            let time = Date.now()
            let timestamp = time.toString()
            this.TimeStamp = timestamp

            // let entryTimestamp = Date(time)
            // this.entryTimeStamp = entryTimestamp

        },
        //to show in the alert and question if wants to generate a new user
        call() {
            alert("Inserted: " + this.UserId)
            this.refreshData()
            if (window.confirm('Insert new user?')) {
                let random = Math.floor(100000 + Math.random() * 900000)
                this.randomNumbers = random
                let timestamp = Date.now().toString()
                this.TimeStamp = timestamp
                this.UserId = "DE " + ''
                this.entryTimestamp = ''

                // let time = Date.now()
                // let entryTimestamp = Date(time)
                // this.entryTimeStamp = entryTimestamp
            }
            else {
                let random = Math.floor(100000 + Math.random() * 900000)
                this.randomNumbers = random
                let timestamp = Date.now().toString()
                this.TimeStamp = timestamp
                this.UserId = "DE " + ''
                this.entryTimestamp = ''

                // let time = Date.now()
                //  let entryTimestamp = Date(time)
                // this.entryTimeStamp = entryTimestamp
            }

        }
    },
    mounted: function () {
        this.refreshData();
        this.insertData()
    },
    filters: {
        date(date) {
            return new Intl.DateTimeFormat("en-GB").format(date);
        }
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
    width: 900px;
    margin: auto;

}
</style>
