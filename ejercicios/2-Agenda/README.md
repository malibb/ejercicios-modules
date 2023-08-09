¡Claro! Vamos a estructurar un ejercicio en el cual puedas practicar las tres técnicas mencionadas.

---

**Ejercicio de Agenda de Contactos en Node.js**

**Objetivo**: Aprender a utilizar la importación y exportación de módulos en Node.js utilizando diversas técnicas.

**Instrucciones**:

1. **Configuración Inicial**:
   - Crea una nueva carpeta llamada `ContactAgenda`.
   - Inicializa un nuevo proyecto Node.js con `npm init`.

2. **Estructura de Carpetas y Archivos**:

Nota: algunos archivos que deberás crear no están listados.

```
│
├── index.js 
│
├── utilities/
│   ├── strings.js
│   └── numbers.js
│
└── contacts/
    ├── manager.js
    └── data/
        ├── name.js
        └── phoneNumber.js
```

3. **Implementación**:

- **utilities/strings.js**: Este archivo debe contener una función `capitalize` que convierta la primera letra de una palabra a mayúsculas.
- **utilities/numbers.js**: Este archivo debe contener una función `randomNumber` que genere un número aleatorio entre 1 y 100.

- **contacts/data/name.js**: Este archivo debe exportar una lista de nombres de contactos (por ejemplo, `['Ana', 'Pedro', 'Juan']`).

- **contacts/data/phoneNumber.js**: Este archivo debe exportar una lista de números telefónicos asociados a los nombres (por ejemplo, `['12345678', '23456789', '34567890']`).

- **contacts/manager.js**: 
  - Debes importar todas las funciones de los archivos dentro de `utilities/` usando la técnica de importación de múltiples funciones.
  - Importa también ambos archivos de `data/` utilizando la técnica de importación de un directorio.
  - Crea una función `getRandomContact` que use la función `randomNumber` para seleccionar y retornar un contacto aleatorio de la lista, pero con el nombre capitalizado usando la función `capitalize`.

- **index.js**: 
  - Importa y utiliza la función `getRandomContact` para mostrar un contacto aleatorio en consola.

**Detalles Específicos**:

- Recuerda que cuando importas un directorio, Node.js busca un archivo `index.js` en ese directorio. Por lo tanto, dentro del directorio `data/`, crea un `index.js` que re-exporte los contenidos de `name.js` y `phoneNumber.js`.

**Resultado Esperado**:

Al ejecutar `index.js`, deberías ver un contacto aleatorio con su nombre capitalizado en la consola.

---

Este ejercicio te permitirá practicar las técnicas de importación básica, importación de múltiples funciones y la importación de un directorio completo. ¡Buena suerte!