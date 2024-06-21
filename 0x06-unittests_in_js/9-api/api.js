const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
})

// New endpoint
app.get('/cart/:id', (req, res) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
      return res.status(404).send('Invalid cart ID');
    }
    res.send(`Payment methods for cart ${id}`);
  });

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
})

module.exports = app;
