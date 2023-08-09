const { capitalize } = require('../utilities/strings');
const { randomNumber } = require('../utilities/numbers');
const { names, phoneNumbers } = require('./data');

function getRandomContact() {
    const index = randomNumber() % names.length;
    const randomName = capitalize(names[index]);
    const associatedPhone = phoneNumbers[index];
    return `${randomName}: ${associatedPhone}`;
}

module.exports = getRandomContact;
