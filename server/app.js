//console.log("Hi")

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
//had to add cors to make the axios work
app.use(cors())
app.use(bodyParser.json())

app.post('', (req, res) =>{
    res.send({
        message: `Hello! ${req.body.email}, You are registered!`
    })
})



app.listen(process.env.PORT || 8082)
