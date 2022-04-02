const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

// middle wares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"*",
}))

// variables 
let port = 5000;
let data = {
    "y": [3, 4, 5, 9, 10.2, 5.6, 6.66, 7, 9, 3]
  }
  

// routes 
app.get('/data',(req,res)=>{

    res.json(data)
    res.statusCode(200)
})


app.listen(process.env.port || port ,()=>console.log(`server started at port ${process.env.port || port}`))