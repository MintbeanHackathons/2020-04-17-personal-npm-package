const charactersListInOrder = require("./charactersListInOrder");

const ifCharacterNotFound = firstName => {
  if (!charactersListInOrder().includes(firstName)) {
    return true;
  }
};

module.exports = ifCharacterNotFound;
