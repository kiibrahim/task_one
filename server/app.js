const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient


const app = express()
//had to add cors to make the axios work
app.use(cors())
app.use(bodyParser.json())

var connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"
var database = "data"

app.get('', (req, res) => {
    database.collection("dailyData").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
app.get('/product', (req, res) => {
    database.collection("products").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
//edit collection name
app.get('/randomuser', (req, res) => {
    database.collection("randomuser").find({}).toArray((error, result) => {
        if (error) {
            console.log(error)
        }
        res.send(result)
    })
})
app.post('/table',(req,res)=>{    
    database.collection("dataTable").insertOne({
        randomNumber : req.body['randomNumber'],
        UserId: req.body['UserId'],
        Timestamp: req.body['Timestamp'],
        Sales: req.body['Sales'],
        entryTimestamp: req.body['entryTimestamp']
    })
})

app.get('/table', (req, res) => {
database.collection("dataTable").find({}).toArray((error, result) => {
            if (error) {
                console.log(error)
            }
         res.json(result)
        })
     
})
//search
app.get('/sorttable/:Timestamp', (req, res) => {
    database.collection("dataTable").find({Timestamp:{$gt:req.params.Timestamp}}).toArray((error, result) => {
                if (error) {
                    console.log(error)
                }
             res.json(result)
            })  
    })

    app.get('/sorttable/dateD/:Timestamp', (req, res) => {
        database.collection("dataTable").find({Timestamp:{$gt:req.params.Timestamp}}).sort({entryTimestamp: 1}).toArray((error, result) => {
                    if (error) {
                        console.log(error)
                    }
                 res.json(result)
                })  
        })

        app.get('/sorttable/dateA/:Timestamp', (req, res) => {
            database.collection("dataTable").find({Timestamp:{$gt:req.params.Timestamp}}).sort({entryTimestamp: -1}).toArray((error, result) => {
                        if (error) {
                            console.log(error)
                        }
                     res.json(result)
                    })  
            })


//connect and auto generated user
app.listen(8082, () => {
    mongoClient.connect(connectionString, { useNewUrlParser: true }, (error, client) => {
        database = client.db(database)
        console.log("Connected")
        var random = Math.floor(100000 + Math.random() * 900000)
        var userID = ("DE" + random)
        var userDetails = {  userId: userID, password: 123456 }
        //console.log(userDetails)
        database.collection("randomuser").insertOne(userDetails, (err, res) => {
            if (err) throw err;
        })

    })
})
