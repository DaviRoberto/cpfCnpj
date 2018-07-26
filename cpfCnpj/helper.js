const axios = require('axios');
const nconf = require('../index');

module.exports = {  
  GetCpfCnpj: async function (rota, cb) {             
    const confApi = nconf.get('api');
    const dados = await axios.get(`${confApi.url}${rota}/${confApi.action.gerar}?token=${confApi.token}`);
    return dados.data;
  },
  
  SetCpfCnpj: async function (rota, cpfCnpj, cb) {
    const confApi = nconf.get('api');
    const dados = await axios.get(`${confApi.url}${rota}/${confApi.action.validar}/${cpfCnpj}?token=${confApi.token}`);
    return dados.data;
  },
  
  GetRota: function (req) {    
    const rota = (req.originalUrl).match(/cpf|cnpj/g)
    return rota;
  }

}