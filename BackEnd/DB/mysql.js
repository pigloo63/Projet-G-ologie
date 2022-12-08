const mysql = require('mysql')

const mysqlconnection = mysql.createConnection({
    host:'localhost',
    database:'site_geol',
    user:'root',
    password:''
})

mysqlconnection.connect((err) => {
    if(err){
        console.log(`error connecting : ${err.stack}`)
    }else(
        console.log(`connecting as id ${mysqlconnection.threadId}`)
    )
})

module.exports = mysqlconnection