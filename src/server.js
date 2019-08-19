const express = require('express')
require('dotenv').config()
const cors = require('cors')

//ROUTES
const routes = require('./routes/index')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
// app.use(express.json)
app.use((req,res,next)=>{
    console.log('Time: %d', Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send('PROJECT')

})

app.listen(port,function(){
    console.log(`server run on port ${port}`)
})
