const mysql=require('mysql');

const connection=mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database:'studentdb'
})

connection.connect((err)=>{
    err?console.log(err.message):console.log("Connected to database");
})

module.exports=connection;