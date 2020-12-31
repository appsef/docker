const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bingo! It worked');
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});