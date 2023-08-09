const usuariosController = require('../controllers/usuariosController');

module.exports = function() {
    console.log('Función usuariosRoutes');
    console.log(usuariosController());
    return 'Función usuariosRoutes';
}
