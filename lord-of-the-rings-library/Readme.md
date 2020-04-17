# Lord Of The Rings Library

A mini library of LOTR characters, including their kind and weapon.

## Purpose

Participation careerhack hackathon (2020-04-17)

## Usage

**Install it :**

npm install lordotr-library

**Require it :**

const \_ = require('lordotr-library');

## Documentation

The following functions are currently implemented:

- `characterCaracteristics` : Returns object of kind:value, weapon:value of chosen character
- `charactersListInOrder` : Returns list of 10 characters in alphabetical order : [
  "Aragorn",
  "Boromir",
  "Frodo",
  "Gandalf",
  "Gimli",
  "Gollum",
  "Legolas",
  "Merry",
  "Pippin",
  "Sam"
  ];
- `createYourOwnCharacter` : Returns a new object of name:value, kind:value, weapon:value of chosen values
- `createYourOwnCharacter` : Returns a new object of name:value, kind:value, weapon:value of chosen values
- `weaponOfCharacter` : Returns the weapon used by chosen character
- `kindOfCharacter` : Returns the kind from chosen character
- `ifCharacterNotFound` : Returns true if character input is not found in the list of 10 characters
