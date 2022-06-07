const cors = require('cors');
const path = require('path')
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

var routes = require('./routes')

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'../build')))
app.use('/',routes)

app.listen(port,()=>{
 console.log(`Sever running on port ${port}`)
})