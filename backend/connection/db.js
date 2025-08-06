const mysql = require('mysql');

const conn = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'belajar_api',
});

conn.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = conn;