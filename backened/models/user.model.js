const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi =require('joi')

const  User = new mongoose.Schema({
    email:{
        type : String,
        required: true,
        unique:true,
        trim: true,
        minlength:6
    },
    password:{
        type : String,
        required: true
    },
    quote:{
        type : String,
    },
},
{collection:'user-data'}
);


const userModel = mongoose.model('userData',User);

module.exports =userModel;
