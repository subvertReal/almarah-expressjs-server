const Database = require('better-sqlite3');


const express = require('express');
const path = require('path');
const fs = require('fs');

let dbPath = path.join(__dirname, 'clothing.db');
if (!fs.existsSync(dbPath)) {
    let db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.exec(`CREATE TABLE clothing (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        clothingType TEXT NOT NULL,
        name TEXT NOT NULL,
        desc TEXT NOT NULL,
        price REAL check(price >= 0),
        pic1 TEXT NOT NULL,
        pic2 TEXT,
        pic3 TEXT

    )`)
    db.close();
}
else{
    const db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.close();
}



const app = express()
const port = 3000

// makes public folder images accessable
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// only for development purposes
app.get('/all', (req,res)=>{
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    
    const row = db.prepare('SELECT * FROM clothing').all();
    // const row = db.prepare('SELECT * FROM clothing WHERE id = ?').get(1);
    console.log(row);

    res.json(row);

    db.close();
})


//! urls that read images in specific folders in /public and sends back the names of the files
//? homepage components
app.get('/scan/slideshow',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/slideshow');
    fs.readdir(imagesDir, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Unable to read images directory' });
            }
            // Filter for image files (webp)
            const imageFiles = files.filter(file =>
                /\.(webp)$/i.test(file)
            );
            // Read and encode each image as base64
            const imageScan = imageFiles.map(file => {
                return {
                    name: file,
                };
            });
            res.json(imageScan);
        });
    
});

app.get('/scan/showcase-one',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/ShowCaseOne');
    fs.readdir(imagesDir, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Unable to read images directory' });
            }
            // Filter for image files (webp)
            const imageFiles = files.filter(file =>
                /\.(webp)$/i.test(file)
            );
            // Read and encode each image as base64
            const imageScan = imageFiles.map(file => {
                return {
                    name: file,
                };
            });
            res.json(imageScan);
        });
    
});

//?mens Clothing components
// app.get('/scan/shalwar-kameez',(req, res) => {
//   const imagesDir = path.join(__dirname, 'public/menClothing/shalwarKameez');
//     fs.readdir(imagesDir, (err, files) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Unable to read images directory' });
//             }
//             // Filter for image files (webp)
//             const imageFiles = files.filter(file =>
//                 /\.(webp)$/i.test(file)
//             );
//             // Read and encode each image as base64
//             const imageScan = imageFiles.map(file => {
//                 return {
//                     name: file,
//                 };
//             });
//             res.json(imageScan);
//         });
    
// });
app.get('/scan/shalwar-kameez',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    
    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('shalwarKameez');
    console.log(row);
    
    res.json(row);
    
});
app.get('/scan/waistcoat',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('waistcoat');
    console.log(row);
    
    res.json(row);
});


//? groomswear
app.get('/scan/fancy-kurtas',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('fancyKurtas');
    console.log(row);
    
    res.json(row);
});
app.get('/scan/princecoats',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('princecoats');
    console.log(row);
    
    res.json(row);  
});
app.get('/scan/sherwanis',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('sherwanis');
    console.log(row);
    
    res.json(row);    
});

//? misc
app.get('/scan/caps',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('caps');
    console.log(row);
    
    res.json(row);      
});
app.get('/scan/footwear',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('footwear');
    console.log(row);
    
    res.json(row);     
});
app.get('/scan/shawls',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('shawls');
    console.log(row);
    
    res.json(row);    
});
app.get('/scan/turban',(req, res) => {
    let dbPath = path.join(__dirname, 'clothing.db');
    let db = new Database(dbPath);
    

    const row = db.prepare('SELECT * FROM clothing WHERE clothingType = ?').all('turban');
    console.log(row);
    
    res.json(row);     
});


app.listen(port, () => {
  console.log(`Express server is listening on port http://localhost:${port}`)
})