const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});



app.get('/scan',(req, res) => {
  const imagesDir = path.join(__dirname, 'public');
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