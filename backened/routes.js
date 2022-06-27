const express = require('express');
const router = express.Router();

router.get('/first',(req,res)=>{
    const data={
        username:"Joan",
        age:23,
        career:"developer"
    }
    res.json(data)
})



module.exports = router;