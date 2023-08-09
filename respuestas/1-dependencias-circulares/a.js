const b = require('./b');

const aVariable = "This is from a.js";

function aFunction() {
    return "Function in a.js";
}

module.exports = {
    aVariable,
    aFunction
};
