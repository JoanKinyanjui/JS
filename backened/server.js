require ('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const client = require('./connection.js');
const app = express();
const axios =require('axios');
const request = require('request');
const secretKey = process.env.SECRET_KEY;
const consumerKey = process.env.CONSUMER_KEY;


  
app.use(cors({origin: true, credentials: true}));
app.use(express.urlencoded({extended: true}))


//CONNECTING TO THE DATABASE...
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to Postgres Subtle Statements database");
  });

//REGISTERING NEW USERS
app.post('/register',(req,res)=>{
    const user = req.body;
    let insertQuery = `insert into client(email, password) 
                       values('${user.email}', '${user.password}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            console.log('New user added');
        }
        else{ console.log(err.message) }
    })
    client.end;
})

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

//MPESA...
//middleware function to generate token
const generateToken = async (req,res,next) => {
    const secretKey = process.env.SECRET_KEY;
    const consumerKey = process.env.CONSUMER_KEY;

    const auth = new Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");
    await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
        headers:{
            authorization: `Basic ${auth}`,
        },
    }
    ).then((response)=>{
        // console.log(response.data.access_token)
     token = response.data.access_token
        next();
    }).catch((err)=>{
        console.log(err);
        // res.status(400).json(err.message)
    })
}

//M-PESA INTEGRATION...
app.post('/stk', generateToken, async(req,res)=>{

    const phoneNo =720335710;
    const amount = 1;

    const date = new Date();
    const timestamp = date.getFullYear()+
    ('0' + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    const passkey=process.env.PASS_KEY;
    const shortcode = 174379;
    const password = new Buffer.from(shortcode + passkey + timestamp).toString('base64')
  
  await axios.post(
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {    
        "BusinessShortCode": shortcode,    
        "Password":password,
      "Timestamp": timestamp,    
      "TransactionType": "CustomerPayBillOnline",    
        "Amount": amount,    
       "PartyA":`254${phoneNo}`,    
        "PartyB":shortcode,    
      "PhoneNumber": `254${phoneNo}`,    
      "CallBackURL":"https://mydomain.com/pat",    
      "AccountReference":`254${phoneNo}`,    
      "TransactionDesc":"Test"
     },     
     {
        headers:{
            Authorization:`Bearer ${token}`
        },
     }
     ).then((data)=>{
        console.log(data.data)
        res.status(200).json(data.data)
     }).catch((err)=>{
        console.log(err.message)
        res.status(400).json(err.message)
     })
    // res.json({phoneNo,amount})
});


app.listen(port,()=>{
    console.log(`Server Running on ${port}...`)
})