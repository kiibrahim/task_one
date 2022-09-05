const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb').MongoClient


const app = express()
//had to add cors to make the axios work
app.use(cors())
app.use(bodyParser.json())

//const mongoConnect = mongoose.connect('mongodb://127.0.0.1:27017/namwwdce').then(console.log("Connected!"))
var connectionString = 	"mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"
var database = "data"


//random user data
var random = Math.floor(100000 + Math.random() * 900000)
var userID = ("DE"+random)
var userDetails = [{userId: userID}]
console.log(userDetails)

//


app.get('',(req,res)=>{
    database.collection("dailyData").find({}).toArray((error ,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})
app.get('/product',(req,res)=>{
    database.collection("products").find({}).toArray((error ,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})
app.get('/randomuser',(req,res)=>{
   database.collection("randomuser").find({}).toArray((error ,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result)
    })
})



app.listen(8082,()=>{
    mongoClient.connect(connectionString,{useNewUrlParser:true},(error,client)=>{
        database = client.db(database)
        console.log("Connected")
        var random = Math.floor(100000 + Math.random() * 900000)
var userID = ("DE"+random)
var userDetails = {userId: userID, password: 123456}
console.log(userDetails)
database.collection("randomuser").insertOne(userDetails,(err,res)=>{
    if (err) throw err;
    console.log("1 document inserted");
})

    })
})
