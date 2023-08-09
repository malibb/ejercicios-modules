const usuarioCRUD = require('../models/Usuario');

function usuariosController() {
    let usuarioMessage = usuarioCRUD();
    console.log('Usuarios Controller using ' + usuarioMessage);
    return 'Usuarios Controller';
}
module.exports = usuariosController;
