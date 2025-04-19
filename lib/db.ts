import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true, // allows waiting for a connection if all are in use
    connectionLimit: 10, // maximum number of connections in the pool
    queueLimit: 0 // no limit on queue
})

// Export the pool for use in queries
export default pool

// Example query execution using the pool
pool.execute('SELECT * FROM users', (err, results) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(results)
})
