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
app.get('/scan/waistcoat',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/menClothing/waistcoat');
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

//? groomswear
app.get('/scan/fancy-kurtas',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/groomswear/fancyKurtas');
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
app.get('/scan/princecoats',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/groomswear/princecoats');
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
app.get('/scan/sherwanis',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/groomswear/sherwanis');
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

//? misc
app.get('/scan/caps',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/misc/caps');
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
app.get('/scan/footwear',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/misc/footwear');
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
app.get('/scan/shawls',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/misc/shawls');
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
app.get('/scan/turban',(req, res) => {
  const imagesDir = path.join(__dirname, 'public/misc/turban');
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