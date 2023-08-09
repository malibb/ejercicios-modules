const pedidoCRUD = require('../models/Pedido');

function pedidosController() {
    let pedidoMessage = pedidoCRUD();
    console.log('Pedidos Controller using ' + pedidoMessage);
    return 'Pedidos Controller';
}
module.exports = pedidosController;
