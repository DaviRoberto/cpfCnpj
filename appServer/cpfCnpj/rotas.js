const express = require('express');
const router = express.Router();
const helper = require('./helper');

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
    .catch(next);
};

router.get('/gerar', asyncMiddleware (async (req, res, next) => {  
  const dados = await helper.GetCpfCnpj(helper.GetRota(req));  
  res.send(dados);    
}));

router.get('/validar/:cpfCnpj', asyncMiddleware (async (req, res, next) => {  
  const dados = await helper.SetCpfCnpj(helper.GetRota(req), req.params.cpfCnpj);    
  res.send(dados);    
}));

module.exports = router;