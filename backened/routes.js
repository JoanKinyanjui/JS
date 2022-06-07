const express = require('express');
const router = express.Router();

router.get('/first',(req,res)=>{
    res.send('Heey my first router')
})

module.exports = router;