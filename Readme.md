<h1 align="center">Welcome to A personal NPM Utility library: vanilla-js-util 👋</h1>

This npm app helps you to increase vanillaJS app building speed.

## Getting Started
#### Install npm
```
npm install --save @suhy/vanilla-js-util
```

#### Feature
- createTag({tag: --, [id: --], [classes: --] })
  : the value of classes is seperated by blank
```
createTag({tag: 'div', classes: 'emphasize bold'});
```

- resizeTextarea()
  : it enables textarea following user's input
```
resizeTextarea()
```

- focusSet(element)
  : from the element(window or dom element), focus on the first descendant input tag
```
const element = document.querySelector('.some')
focusSet(element);
```

- reloadScreen
  : it replaces `window.location.reload`
```
reloadScreen()
```

- capitalize
  : it changes the first letter of input text to capitalized letter
```
const todo = 'todo';
capitalize(todo); //=> Todo
```

#### Usage
```
import { createTag, resizeTextarea, focusSet, reloadScreen, capitalize } from '@suhy/vanilla-js-util';
```

## Author

👤 **Suhyeon Jang**

- Github: [@shjang7](https://github.com/shjang7)
- LinkedIn: [@shjang](https://www.linkedin.com/in/shjang/)
- Twitter: [@shjang12](https://twitter.com/shjang12)

## 🤝 Contributing

1. Fork it (https://github.com/shjang7/2020-04-17-personal-npm-package/fork)
2. Create your feature branch (git checkout -b feature/[choose-a-name])
3. Commit your changes (git commit -am 'what this commit will fix/add')
4. Push to the branch (git push origin feature/[chosen-name])
5. Create a new Pull Request

## Deployment

### ✨ [Test Live Demo](https://shjang7.github.io/2020-04-17-personal-npm-package/)

## Resources

* [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
* [Video - Creating & publishing your own NPM modules](https://www.youtube.com/watch?v=rTsz09zRuTU)
* [freeCodeCamp's Tutorial](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)
