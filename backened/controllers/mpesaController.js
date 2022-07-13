require('dotenv').config();
const axios = require('axios');
const datetime=require('node-datetime');
const consumerkey=process.env.CONSUMERKEY;
const consumerSecret =process.env.CONSUMERSECRET;
const passkey=process.env.PASSKEY
const shortcode=process.env.SHORTCODE

const dt=datetime.create();
const formatted =dt.format('YmdHMS');

const newPassword=()=>{
    const passString =shortcode +passkey + formatted;
    const base64EncodedPassword =Buffer.from(passString).toString('base64');

    return base64EncodedPassword;
}



exports.token =(req,res,next)=>{
const url='https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
     const auth =
      'Basic'+
Buffer.from(consumerkey+ ':' +consumerSecret).toString('base64');
      const headers ={
        Authorization: auth
      };
axios.get(
        url,{
            headers:headers,        }
      ).then((response)=>{
        console.log(response.data);
        next();
      })
      .catch((error)=>console.log(error))
};

exports.mpesaPassword=(req,res)=>{
    res.send(newPassword())
};
exports.stkPush =(req,res)=>{
 res.send('token is sent')
 }
