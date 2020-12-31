const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bingo! It worked and now updated');
});

app.get('/trigger', (req, res) => {
  res.send('triggered');
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
