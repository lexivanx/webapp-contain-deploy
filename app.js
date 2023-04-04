const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Welcome to mywebapp01!');
});

app.listen(port, () => {
  console.log(`mywebapp01 is listening at http://localhost:${port}`);
});
