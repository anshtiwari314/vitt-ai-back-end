const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const sampleData = require('./sample.json')

dotenv.config()

// middle wares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*",
}))

// variables 
let port = 5000;


  

// routes 
app.get('/data',(req,res)=>{

    res.json(sampleData)
    res.statusCode(200)
})


app.listen(process.env.port || port ,()=>console.log(`server started at port ${process.env.port || port}`))