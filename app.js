const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./index');
const rotas = require('./cpfCnpj/rotas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(['/cpf', '/cnpj'], rotas);

app.get('/', function(req, res) {
  res.sendfile('./index.html');
});

const server = app.listen(config.get('app:port'), function() {  
  const port = server.address().port;    
  console.log(`Aplicação rodando em http://localhost:${port}`);
});