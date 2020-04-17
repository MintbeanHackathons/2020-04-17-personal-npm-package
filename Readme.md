# Jasmine's personal NPM Utility library

![npm(scoped)](https://img.shields.io/npm/v/@jsmney/minitools)[![install size](https://packagephobia.now.sh/badge?p=@jsmney/minitools)](https://packagephobia.now.sh/result?p=@jsmney/minitools)

Created in April 2020 in participation of a Mintbean Hackathon.
[github](https://github.com/jsmney/2020-04-17-personal-npm-package)

## Install

`$ npm install @jsmney/minitools`

## Usage

```javascript
const mini = require('@jsmney/minitools')

mini.addOne(3) // 4
```

## Example execution on RunKit

Check it out on my [RunKit playground](https://runkit.com/jsmney/5e99eff44dbf5a00133ebab7)

## Requirements

1. Create a personal [npm](https://npmjs.com) library.
1. Fill it with methods you would find useful in future projects.
1. Publish it to `npm` (you may have to sign up for an `npm` account).
1. Demonstrate that it can be `require`d right from `npm`, by building a project using Runkit or Codepen

## Special requirements for today's hackathon:

_Aesthetics_: There is no visual component to today's project. Your score will be determined by your module's beauty. i.e. by the method names, number of parameters, whether they are functions or classes, namespaces within your package, and how lightweight the imported module is, etc.

The more methods you put in your package, the better.

_Deployment_:

Videos and screenshots will not be accepted. You must leave links to:

1. Your NPM package
2. A deployed project on Runkit or Codepen.

Your deployment options for #2 above are:

1. Runkit - You will have to sign up and create a new notebook. See the example [Runkit Notebooks](https://runkit.com/monarchwadia).
2. Codepen - You can import your project into Codepen using [unpkg](https://unpkg.com/)

## Bonus points

Bonus points will be awarded for:

- Creating a typescript-compatible project
- Creating unit tests
- Using a precompiler (only if appropriate, i.e. if you are using Typescript or Babel, or if you are creating a React library)
- Leaving detailed instructions for local development on `Readme.md`
- Writing documentation (for your future self's benefit)

## Frameworks:

Any or none. You can create a personal library with just plain JavaScript. You can also create a personal library that contains common React/Vue/Angular components that you find yourself using often across projects.

## Restrictions

- Your project must use JavaScript.
- You must follow deployment instructions above.

There are no other restrictions.

## Tips for success:

1. The project is intentionally simple so you can focus on code quality.
1. The requirements are intentionally minimalistic so you can get as creative as you'd like.
1. You get a LOT of time for code review comments. So you can win even if you feel your project isn't great, simply on the strength of your code review comments!
1. Keep in mind, 33% of your score is based on aesthetic appeal!

## Resources

- [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
- [Video - Creating & publishing your own NPM modules](https://www.youtube.com/watch?v=rTsz09zRuTU)
- [freeCodeCamp's Tutorial](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)
