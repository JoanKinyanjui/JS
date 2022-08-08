require ('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const client = require('./connection.js')
const app = express();


// app.use(cors());
// app.use(cors({
//     origin: '*'
//   }))
  
app.use(cors({origin: true, credentials: true}));


//CONNECTING TO THE DATABASE...
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to Postgres Subtle Statements database");
  });



//FETCHING PRODUCTS FROM DATABASE...
app.get('/products', (req, res)=>{
    client.query(`Select * from products`, (err, result)=>{
        if(!err){
            console.log(result.rows);
            res.json(result.rows)
        }
    });
    client.end;
})


//M-PESA INTEGRATION...
const mpesaRouter = require('./routes/mpesa');
app.use(mpesaRouter)


app.listen(port,()=>{
    console.log(`Server Running on ${port}....`)
})