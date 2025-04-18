import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
// sesuai degnan env
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portofolio',
})

export default db
