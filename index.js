const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const path = require('path');


app.get('/', (req, res) => {
    res.json({ message: "API is up and running" });
});

app.get('/all', (req, res) => {
    fs.readFile(path.join(__dirname, './vercel/data.json'), 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        }
        res.json(JSON.parse(data));
    });
});


app.get('/all/:id', (req, res) => {
    fs.readFile(path.join(__dirname, './vercel/data.json'), 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
        }
        const jsonData = JSON.parse(data);
        const item = jsonData.find(
            item =>
                item.id === parseInt(req.params.id)
        );
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
