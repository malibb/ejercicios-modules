**Ejercicio de Sistema E-commerce en Node.js**

Objetivo: Familiarizarse con la estructura modular de Node.js, practicar importaciones y exportaciones entre módulos, y entender cómo se interconectan los componentes en un sistema más grande.

**Instrucciones**:

1. **Configuración Inicial**:
   - Crea una nueva carpeta llamada `E-commerceSystem`.
   - Inicializa un nuevo proyecto Node.js usando `npm init`.

2. **Estructura de Carpetas y Archivos**:
   
   Dentro de la carpeta principal `E-commerceSystem`, crea la siguiente estructura:

```
│
├── index.js 
│
├── config/
│   ├── dbConfig.js
│   └── apiConfig.js
│
├── models/
│   ├── Producto.js
│   ├── Usuario.js
│   └── Pedido.js
│
├── controllers/
│   ├── productosController.js
│   ├── usuariosController.js
│   └── pedidosController.js
│
├── routes/
│   ├── productosRoutes.js
│   ├── usuariosRoutes.js
│   └── pedidosRoutes.js
│
└── services/
    ├── autenticacionService.js
    └── notificacionService.js
```

3. **Implementación**:

- Para cada archivo:
  - Define al menos una función que imprima un mensaje usando `console.log()` agregar en cada entidad las funciones básicas del crud. El mensaje debe ser el nombre de la función.
  - La función también debe devolver una cadena con el nombre de la función.

- En los archivos que importan otros archivos:
  - Importa las funciones necesarias de los otros módulos.
  - Cuando invoques a las funciones importadas dentro de tu función principal, concatena y muestra todos los mensajes devueltos.

**Detalles Específicos**:

- `index.js` debe importar `dbConfig.js` y `apiConfig.js`.
- `Pedido.js` en la carpeta `models` debe importar `Producto.js` y `Usuario.js`.
- `productosController.js` debe importar `Producto.js`.
- `usuariosController.js` debe importar `Usuario.js`.
- `pedidosController.js` debe importar `Pedido.js`, `Producto.js` y `Usuario.js`.
- `productosRoutes.js` debe importar `productosController.js`.
- `usuariosRoutes.js` debe importar `usuariosController.js`.
- `pedidosRoutes.js` debe importar `pedidosController.js`.

**Resultado Esperado**:

Al ejecutar `index.js`, deberías ver una serie de mensajes en la consola, reflejando las importaciones y la ejecución de las funciones en los diferentes módulos.