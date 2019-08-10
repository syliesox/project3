const repl = require('repl');
const mongoose = require('mongoose');


// require all models in the 'models' directory
require('../index.js').toContext(global);

var shell = repl.start({
  prompt: 'mongoose> ',
  input: process.stdin,
  output: process.stdout,
  useColors: true,
});
