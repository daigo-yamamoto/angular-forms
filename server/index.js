const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  console.log(req.body); // Aqui você salvaria os dados no banco de dados
  res.send({ status: 'Received your data!' });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
