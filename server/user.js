//console.log("Hi")

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




// app.post('', (req, res) =>{
//     res.send({
//         message: `Hello! ${req.body.email}, You are registered!`
//     })
// })

app.get('',(req,res)=>{
    database.collection("userDetails").find({}).toArray((error ,result)=>{
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
    })
})
