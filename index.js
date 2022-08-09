const express = require('express');
const app = express();
const fs = require('fs/promises'); // to access our html files, use fs
const port = 8080;

// our server:
app.get('/', async (req, res) => {
  res.send(await fs.readFile('index.html', 'utf8'));
});

app.get('/about', async (req, res) => {
  res.send(await fs.readFile('about.html', 'utf8'));
});

app.get('/contact-me', async (req, res) => {
  res.send(await fs.readFile('contact-me.html', 'utf8'));
});

// this is for handling 404 responses:
app.use(async (req, res, next) => {
  res.status(404).send(await fs.readFile('404.html', 'utf8'));
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});