var nconf = require('nconf');

nconf.argv()
  .env()
  .file({ file: './config/default.json' });

 module.exports =  nconf;