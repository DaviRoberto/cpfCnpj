var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Define the home page route
router.get('/', function(req, res) {
  res.send('Retorna Todos usuários');
});

// Define the about route
router.get('/:id', function(req, res) {
  res.send('Retorno apenas 1 usuário');
});


module.exports = router;