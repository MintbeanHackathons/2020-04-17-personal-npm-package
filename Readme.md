# Jasmine's personal NPM JS Utility library

![npm(scoped)](https://img.shields.io/npm/v/@jsmney/minitools)[![install size](https://packagephobia.now.sh/badge?p=@jsmney/minitools)](https://packagephobia.now.sh/result?p=@jsmney/minitools)

Created in April 2020 in participation of a Mintbean Hackathon.
[github](https://github.com/jsmney/2020-04-17-personal-npm-package)

## Install

`$ npm install @jsmney/minitools`

## Usage

```javascript
const mini = require('@jsmney/minitools')

mini.addOne(3) // 4
mini.leftPad('hello', 10) // '     hello'
mini.leftPad(100, 10, '0') // '0000000100'
```

## Example execution on RunKit

Check it out on my [RunKit playground](https://runkit.com/jsmney/5e99eff44dbf5a00133ebab7)

## Requirements

1. Create a personal [npm](https://npmjs.com) library.
1. Fill it with methods you would find useful in future projects.
1. Publish it to `npm` (you may have to sign up for an `npm` account).
1. Demonstrate that it can be `require`d right from `npm`, by building a project using Runkit or Codepen

## Resources

- I found [freeCodeCamp's Tutorial](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/) SUPER helpful :)

### Additional Links

- [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Video - Creating & publishing your own NPM modules](https://www.youtube.com/watch?v=rTsz09zRuTU)
- [Testing npm modules locally](https://www.youtube.com/watch?v=YBy5qIsrOyk)
- [npm-link](https://docs.npmjs.com/cli/link.html)
