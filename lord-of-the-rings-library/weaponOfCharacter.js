const characterCaracteristics = require("./characterCaracteristics");
const ifCharacterNotFound = require("./ifCharacterNotFound");

const weaponOfCharacter = firstName => {
  if (ifCharacterNotFound(firstName)) {
    return "Sorry, the character you are looking for is not available in our list.";
  }
  const infoOfCharacter = characterCaracteristics(firstName);
  const weaponOfChar = infoOfCharacter["weapon"];
  return `${weaponOfChar} is the weapon used by ${firstName}.`;
};

console.log(weaponOfCharacter("Gollvdsvum"));
