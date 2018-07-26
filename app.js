const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./index');
const rotas = require('./cpfCnpj/rotas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(['/cpf', '/cnpj'], rotas);

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err)
  res.status(err.status || 500).send({
    message: err.message,    
  })
});

const server = app.listen(config.get('app:port'), function() {  
  const port = server.address().port;    
  console.log(`Aplicação rodando em http://localhost:${port}`);
});