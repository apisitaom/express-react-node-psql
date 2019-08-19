const router = require('express').Router()
const db = require('../configdb/config')
const seller = require('../services/sellerService')

router.get('/get',(req,res)=>{
    res.json(' seller ')
})

router.get('/getall',seller.seller.getdataall)

module.exports = router