const express = require('express');
const router = express.Router();
const helper = require('./helper');

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
    .catch(next);
};

router.get('/gerar', asyncMiddleware (async (req, res,next) => {
  const rota = (req.originalUrl).replace(/[/]|gerar/g, '');    
  const dados = await helper.getCpfCnpj(rota);  
  res.send(dados);    
}));

router.get('/validar/:cpfCnpj', function(req, res) {
  res.send('Válida CNPJ');
});

module.exports = router;