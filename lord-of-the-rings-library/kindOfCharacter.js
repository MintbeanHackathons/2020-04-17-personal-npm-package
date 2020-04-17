const characterCaracteristics = require("./characterCaracteristics");
const ifCharacterNotFound = require("./ifCharacterNotFound");

const kindOfCharacter = firstName => {
  const infoOfCharacter = characterCaracteristics(firstName);
  const kindOfChar = infoOfCharacter["kind"];
  if (ifCharacterNotFound(firstName)) {
    return "Sorry, the character you are looking for is not available in our list.";
  }
  return `${firstName} is of kind ${kindOfChar}.`;
};
