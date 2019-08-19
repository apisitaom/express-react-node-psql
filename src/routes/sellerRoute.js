const router = require('express').Router()


router.get('/get',(req,res)=>{
    res.send('get start seller routes')
})

module.exports = router