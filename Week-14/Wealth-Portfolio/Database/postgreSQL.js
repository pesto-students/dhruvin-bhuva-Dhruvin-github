const {Client} = require('pg')

const client = new Client({
    user:"postgres",
    password:"dhruvindatabase",
    database:"Wealth_Portfolio",
    host:"localhost",
    port:5432,
    multipleStatements: true
});

client.connect();

client.on("connect",()=>{

    console.log("Database Connected");

});

module.exports = client;