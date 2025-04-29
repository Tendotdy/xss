const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.query;
  res.send(`
    <h1>Search Result</h1>
    <p>Your search for: <strong>${query}</strong></p>
  `);
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
