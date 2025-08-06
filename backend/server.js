const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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



app.get('/getWarga', (req, res) =>{
    conn.query('SELECT * FROM tb_warga', (err, results) =>{
        if(err){
            console.log('Error fetching data:', err);
            res.status(500).json({ message: 'Error fetch data'});
        }
        else{
            res.status(200).json({
                message: 'Data fetched successfully',
                data: results
            });
        };
    });
});




app.listen(port, () =>{
    console.log(`server berjalan di http://localhost:${port}`);
})

// kutip dua pake yang ini ``. bukan yg ini ''