const productoCRUD = require('./Producto');
const usuarioCRUD = require('./Usuario');

function pedidoCRUD() {
    let productoMessage = productoCRUD();
    let usuarioMessage = usuarioCRUD();
    console.log('Pedido CRUD Operation using ' + productoMessage + ' and ' + usuarioMessage);
    return 'Pedido CRUD Operation';
}
module.exports = pedidoCRUD;
