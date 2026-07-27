
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
