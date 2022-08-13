const express = require('express');
const router = express.Router();

//REGISTERING USERS TO THE DATABASE
router.post('/register',(req,res)=>{
    const user = req.body;
    let insertQuery = `insert into client(email, password,created_at) 
                       values('${user.email}', '${user.password}, ${user.created_at}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            console.log('Welcome to Subtle Statements'+ username);
        }
        else{ console.log(err.message) }
    })
    client.end;
})
  

module.exports = router;
