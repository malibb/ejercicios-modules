const productoCRUD = require('../models/Producto');

function productosController() {
    let productoMessage = productoCRUD();
    console.log('Productos Controller using ' + productoMessage);
    return 'Productos Controller';
}
module.exports = productosController;
