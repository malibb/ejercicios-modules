const dbConfigMessage = require('./config/dbConfig')();
const apiConfigMessage = require('./config/apiConfig')();

console.log('E-commerce system started using ' + dbConfigMessage + ' and ' + apiConfigMessage);
