const ifCharacterNotFound = require("./ifCharacterNotFound");

const characterCaracteristics = firstName => {
  let userInput = firstName.toLowerCase();
  let finalCharacter = {
    kind: null,
    weapon: null
  };

  if (ifCharacterNotFound(firstName)) {
    return "Sorry, the character you are looking for is not available in our list.";
  }

  if (userInput === "aragorn") {
    return (finalCharacter = {
      kind: "Human",
      weapon: "Sword"
    });
  } else if (userInput === "boromir") {
    return (finalCharacter = {
      kind: "Human",
      weapon: "Sword"
    });
  } else if (userInput === "frodo") {
    return (finalCharacter = {
      kind: "Hobbit",
      weapon: "Sword"
    });
  } else if (userInput === "gandalf") {
    return (finalCharacter = {
      kind: "Wizard",
      weapon: "Staff"
    });
  } else if (userInput === "gimli") {
    return (finalCharacter = {
      kind: "Dwarf",
      weapon: "Axe"
    });
  } else if (userInput === "gollum") {
    return (finalCharacter = {
      kind: "Creature",
      weapon: "The will of getting back his precious"
    });
  } else if (userInput === "legolas") {
    return (finalCharacter = {
      kind: "Elf",
      weapon: "Bow"
    });
  } else if (userInput === "merry") {
    return (finalCharacter = {
      kind: "Hobbit",
      weapon: "Sword"
    });
  } else if (userInput === "pippin") {
    return (finalCharacter = {
      kind: "Hobbit",
      weapon: "Sword"
    });
  } else if (userInput === "sam") {
    return (finalCharacter = {
      kind: "Hobbit",
      weapon: "Sword"
    });
  } else {
    ifCharacterNotFound();
  }
};

module.exports = characterCaracteristics;
