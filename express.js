const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const port = 3000

// makes public folder images accessable
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

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
app.get('/scan/shalwar-kameez',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/menClothing/shalwarKameez');
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



app.listen(port, () => {
  console.log(`Express server is listening on port http://localhost:${port}`)
})