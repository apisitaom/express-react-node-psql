const router = require('express').Router()


router.get('/get',(req,res)=>{
    res.send('get start seller')
})

module.exports = router