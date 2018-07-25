const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const config = require('./index');
const userRoutes = require('./user/useRoute');

const rotas = require('./cpfCnpj/rotas');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user',userRoutes);

app.use(['/cpf', '/cnpj'], rotas);

app.get('/validarCPF/:cpf', function(req, res, next) {   
  axios.get(`http://geradorapp.com/api/v1/cpf/validate/${req.params.cpf}?token=689abbd85ae59166a6cb4126d19a1a82`)  
  .then(function (response) {  
    res.send(response.data);    
  })
  .catch(function (error) {
    next(error);
  });
});

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