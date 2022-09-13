<template>
    <div class="data">
        <h1>Welcome,User!</h1>
        <h2>Add Data Here</h2>
        <form>
        <input type="text"
         v-model= "randomNumbers"/><br/>
        <input type="text" v-model="UserId" required/><br/>
        <input type="text" v-model="Sales" required/><br/>
        <button @click="post() ; call()" type="submit">
            Add Data
       </button>
    </form><br/>

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
import axios from 'axios'

export default {
    data() {
        return {
            datas: [],
            randomNumbers:'',
            UserId: "DE "+'',
            Sales:'',
            TimeStamp: '',
            entryTimeStamp: ''
        }
    },
    methods:{ 
        //to post the data to  the server
        post(){
            axios.post('http://localhost:8082/table',{
            randomNumber : this.randomNumbers,
            UserId :this.UserId,
            Sales: this.Sales,
            Timestamp: this.TimeStamp,
            entryTimestamp : this.entryTimeStamp
            }
        )
    },
    //to fetch the data from server
    getPost(){
        axios.get('http://localhost:8082/table').then((response) => {
            //console.log(response.data)
            this.datas = response.data
        })
    },  
    //to show in the data table right after the insert a new user
    refreshData(){
        axios.get('http://localhost:8082/table')
        .then((response)=>{
            this.datas = response.data
        });
    },
    //to insert new random number and new timestamp
    insertData(){
        let random = Math.floor(100000 + Math.random() * 900000)
        this.randomNumbers = random

        let time = Date.now()
        let timestamp = time.toString()
        this.TimeStamp = timestamp

        let entryTimestamp = Date(time)
        this.entryTimeStamp = entryTimestamp

    },
    //to show in the alert and question if wants to generate a new user
    call(){
            alert("Inserted: " + this.UserId)
            this.refreshData()
            if (window.confirm('Insert new user?'))
{
    let random = Math.floor(100000 + Math.random() * 900000)
        this.randomNumbers = random
        let timestamp = Date.now().toString()
        this.TimeStamp = timestamp
        this.UserId = "DE "+''
        
        let time = Date.now()
        let entryTimestamp = Date(time)
        this.entryTimeStamp = entryTimestamp
}
else{
    let random = Math.floor(100000 + Math.random() * 900000)
        this.randomNumbers = random
        let timestamp = Date.now().toString()
        this.TimeStamp = timestamp
        this.UserId = "DE "+''
       
        let time = Date.now()
         let entryTimestamp = Date(time)
        this.entryTimeStamp = entryTimestamp
}

    }
},
    mounted() {
    
    },
mounted:function(){
    this.refreshData();
    this.insertData()
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
#weekTable{
    width: 500px;
    margin: auto;
    
}

</style>
