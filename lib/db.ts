import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
// sesuai degnan env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

export default db
