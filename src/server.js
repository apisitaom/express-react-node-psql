const express = require('express')
require('dotenv').config()
const cors = require('cors')
const reqip = require('request-ip');

//ROUTES
const seller = require('./routes//seller')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use((req,res,next)=>{
    const clientIp = reqip.getClientIp(req); 
    let currentDatetime = new Date()
    let formattedDate = currentDatetime.getFullYear() + "-" + (currentDatetime.getMonth() + 1) + "-" + currentDatetime.getDate() + " " + currentDatetime.getHours() + ":" + currentDatetime.getMinutes() + ":" + currentDatetime.getSeconds() 
    console.log(`Date = `+formattedDate+`, IP IPV4 = `+clientIp)
    next()
})

//ROUTER
app.use('/seller',seller);

app.get('/',(req,res)=>{
    res.send('!@%^#!@&#%!@&#%===PROJECT===!*@&(#!@^&#*!@$^!@&*')
})

app.use((err,req,res,next)=>{
    console.log(err)
    if(err.status === 500 || err.status === 404){
        err.message = `server error`
    }
    next()
})

app.use((err,req,res,next)=>{
    res.status(500).send({
        code: 500,
        msg: err.message
    })
})

app.listen(port,function(){
    console.log(`server run on port ${port}`)
})
