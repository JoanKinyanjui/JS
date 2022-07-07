require ('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user.model')

var routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));


//DATABASE
mongoose.connect('mongodb+srv://js-creator:Myjspassword@js-cluster.adih8.mongodb.net/js-app',{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.on('connected',()=>{
    console.log('Mongoose is connected.!!!!!!!');
})
connection.on('disconnected',function(){
    console.log('database is disconnected successfully');
 })

//usersInfo
app.use('/users',(req,res)=>{
        const collection  = connection.db.collection("users");
        collection.find({}).toArray(function(err, data){
            res.json(data)
            console.log(data); // it will print your collection data
        });
})
//products
app.use('/products',(req,res)=>{
    const collection  = connection.db.collection("products");
    collection.find({}).toArray(function(err, data){
        res.json(data)
        console.log(data); // it will print your collection data
    });
    })
//orders
app.use('/orders',(req,res)=>{
    const collection  = connection.db.collection("orders");
        collection.find({}).toArray(function(err, data){
            res.json(data)
            console.log(data); // it will print your collection data
        });
    })
//payment
app.use('/paymentsbycard',(req,res)=>{
    const collection  = connection.db.collection("payment");
        collection.find({}).toArray(function(err, data){
            res.json(data)
            console.log(data); // it will print your collection data
        });
    })    
//paymentBy Mpesa
app.use('/paymentsbympesa',(req,res)=>{
    const collection  = connection.db.collection("payment-mpesa");
    collection.find({}).toArray(function(err, data){
        res.json(data)
        console.log(data); // it will print your collection data
    });
    })

//Post new user  
app.post('/register',async (req,res)=>{
    console.log(req.body)
    try{
         await User.create({
            email: req.body.email,
            password:req.body.password,
        })
        res.json({status: 'ok'})
    }catch(err){
        console.log(err)
        res.json({status: 'error',error:"Duplicate Email"})
    }
})
app.post('/login',async (req,res)=>{
         const user= await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
if(user){
    return res.json({status:'ok',user: true})
}else{
    return res.json({status:'error',user: false})
}
        res.json({status: 'ok'})

})
app.use('/first',routes)    
   

app.listen(port,()=>{
 console.log(`Server running on port ${port}.....`)
});