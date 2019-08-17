const express = require('express')
require('dotenv').config()
const cors = require('express')

//ROUTES
const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json)

app.get('/',(req,res)=>{
    res.send('PROJECT')
})

app.use((req,res,next)=>{
    console.log('Time: %d', Date.now())
    next()
})


app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})