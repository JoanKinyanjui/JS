const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Mypostgresspassword",
    database: "subtle-statements"
})

  
module.exports = client;