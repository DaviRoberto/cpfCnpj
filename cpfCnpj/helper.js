const express = require('express');
const app = express();
const axios = require('axios');
const nconf = require('../index');

async function GetCpfCnpj(rota, cb) {     
  const cfgApi = nconf.get('api');
  const dados = await axios.get(`${cfgApi.url}${rota}/generate?token=${cfgApi.token}`);
  return dados.data;
};

module.exports.getCpfCnpj = GetCpfCnpj;