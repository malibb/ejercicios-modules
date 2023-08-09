const productosController = require('../controllers/productosController');

module.exports = function() {
    console.log('Función productosRoutes');
    console.log(productosController());
    return 'Función productosRoutes';
}
