const mysql2 = require("mysql2")
require("dotenv").config()

const { HOST, DB_PORT, USER, PASSWORD, DATABASE } = process.env

const connection = mysql2.createPool(
    {
        host: HOST,
        port: DB_PORT,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
        connectionLimit: 10,
        waitForConnections:true,
        queueLimit: 0
    }
)
module.exports = connection.promise()