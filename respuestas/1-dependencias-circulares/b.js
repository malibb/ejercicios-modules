const a = require('./a');

console.log(a.aVariable);
console.log(a.aFunction());

function bFunction() {
    return "Function in b.js";
}

module.exports = {
    bFunction
};
