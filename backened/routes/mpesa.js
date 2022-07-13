const express = require('express');
const router =express.Router();

router.get('/mpesa',(req,res)=>{
    res.send('Hae am learning how to integrate mpesa')
})

const {mpesaPassword,token,stkPush }=require('../controllers/mpesaController');
router.get('/password',mpesaPassword)
router.post('/stk/push',token,stkPush)

module.exports =router;