const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.send('THIS WILL BE YOUR SAMPLE DATA RETURNED YAY!!');
});

app.listen(port, () => {
  console.log(`Node backend app running on port: ${port}`);
});
