import mysql from 'mysql2/promise'; // Using the promise-based version for async/await  

// Create a pool of connections (recommended for improved performance).  
const db = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    password: '',  
    database: 'portfolio', // Note: the correct spelling seems to be 'portfolio' instead of 'portofolio'.  
    waitForConnections: true,  
    connectionLimit: 10,  
    queueLimit: 0  
});  

// declare the tupe of query



// Function to execute a query  
export const executeQuery = async (query, params = []) => {  
    try {  
        const [results, fields] = await db.execute(query, params);  
        return results;  
    } catch (error) {  
        console.error('Database query error:', error);  
        throw error; // Re-throw the error for handling upstream if needed  
    }  
};  

// Example usage (uncomment to use)  
(async () => {  
    try {  
        const rows = await executeQuery('SELECT * FROM works');  
        console.log(rows);  
    } catch (error) {  
        console.error('Error executing query:', error);  
    }  
})();  

export default db;