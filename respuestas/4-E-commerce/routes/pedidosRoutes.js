const pedidosController = require('../controllers/pedidosController');

module.exports = function() {
    console.log('Función pedidosRoutes');
    console.log(pedidosController());
    return 'Función pedidosRoutes';
}
