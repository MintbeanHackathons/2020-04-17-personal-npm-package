# Today's Objective: A personal NPM Utility library

## Subject: vanilla-js-util

This npm app helps you to decrease your time to build vanillaJS app.

## Getting Started
#### Install npm
```
npm install @suhy/vanilla-js-util
```

#### Example usage
```
import { createTag, resizeTextarea, focusSet, reloadScreen, capitalize } from '@suhy/vanilla-js-util';

createTag('div');
createTag('tag name', 'id name', 'class name', 'inner text');
resizeTextarea(); // if it has textarea tag
const element = document.querySelector('.some');
focusSet(element); // from this element, select input and focus on
reloadScreen(); // instead window.location.reload();
capitalize('a sentense'); // it represent as 'A sentense'
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

## Resources

* [Creating and publishing unscoped public packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages)
* [Video - Creating & publishing your own NPM modules](https://www.youtube.com/watch?v=rTsz09zRuTU)
* [freeCodeCamp's Tutorial](https://www.freecodecamp.org/news/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78/)
