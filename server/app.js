const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient
const bcrypt = require('bcrypt')


const app = express()
//had to add cors to make the axios work
app.use(cors())
app.use(bodyParser.json())
//database connection string to conncet 
let connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"
//database name
let database = "data"
//to get the daily data for chartjs
app.get('', (req, res) => {
    database.collection("dailyData").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
//productwise sales data for sales pie chart
app.get('/product', (req, res) => {
    //collection name products
    database.collection("products").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
//get the default username and password for login 
app.get('/randomuser', (req, res) => {
    //collection name randomuser
    database.collection("randomuser").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
//to post the data into the database collecection dataTable
app.post('/table', (req, res) => {
    database.collection("dataTable").insertOne({
        randomNumber: req.body['randomNumber'],
        UserId: req.body['UserId'],
        Timestamp: req.body['Timestamp'],
        Sales: req.body['Sales'],
        entryTimestamp: req.body['entryTimestamp'],
        exitTimestamp: req.body['exitTimestamp']
    })
})
//fetch the posted data 
app.get('/table', (req, res) => {
    //collection name dataTable
    database.collection("dataTable").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.json(result)
    })

})
//search with timestamp and result will greater than the timestaps
app.get('/sorttable/:Timestamp', (req, res) => {
    database.collection("dataTable").find({ Timestamp: { $gt: req.params.Timestamp } }).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.json(result)
    })
})
//sort according to date descending order
app.get('/sorttable/dateDescending/:Timestamp', (req, res) => {
    database.collection("dataTable").find({ Timestamp: { $gt: req.params.Timestamp } }).sort({ entryTimestamp: 1 }).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.json(result)
    })
})
//sort according to date ascending order
app.get('/sorttable/dateAscending/:Timestamp', (req, res) => {
    database.collection("dataTable").find({ Timestamp: { $gt: req.params.Timestamp } }).sort({ entryTimestamp: -1 }).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.json(result)
    })
})
//posting userdetails to the database
app.post('/registered', async (req, res) => {
    //const salt = await bcrypt.genSalt(10) 
   // const hashedPassword = await bcrypt.hash(req.body.password, salt)
    database.collection("userEntry").insertOne({
        email: req.body['email'],
        userName: req.body['userName'],
        firstName: req.body['firstName'],
        lastName: req.body['lastName'],
        password: req.body['password']
    })
})
//fetch
app.get('/registered', (req, res) => {
    database.collection("userEntry").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
let uName = null
let password = null
app.post('/loginDetails', (req, res)=>{
   let usernaam =  req.body.userName
   let pass = req.body.password

   this.uName =  usernaam
   this.password =  pass
})
//login details match
app.get('/loginDetails',(req, res)=>{
    setTimeout(  ()=>{
database.collection("userEntry").find({userName: this.uName}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        else{
            if(result.length>0){
                    if(this.password == result[0].password){
                        res.send("LOGGED In")
                    }
                    else{
                        res.send("Incorret")
                    }
                }
            else{
                res.send("User not Found")
            }
        }
       // res.send(result)
    }) 
    }  ,10)
    
})
//server and database connection
app.listen(8082, () => {
    mongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
        database = client.db(database)
        console.log("Connected")

    })
})
