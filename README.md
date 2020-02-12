# _Face Off!_

#### _Play a guessing game. Our program will generate a fake face as awell as a randomly selected headshot of a real person, and the user has to guess which is which. | Feb. 2020_

#### By _**Alex Skreen and Eric Settels **_
[link to demo site coming](#)

## Description

_This boilerplate site has one index.html file that is already linked to the included bootstrap.css(4.4), styles.css, jQuery.js(3.4.1), and scripts.js._


There is a pre-built two input form with a submit button. There is also a simple jQuery function that will console.log when the submit button is clicked.

The .gitignore file is a template for mac osx but a link is provided to get a template for any operating system. 

[create a .gitignore template for your os here](https://www.gitignore.io/)

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. find the green 'Clone or Download' button and copy the link
2. open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. in terminal type '_git clone {link to repository}_ '

```sh
git clone Link-Here
```

4. navigate to the new folder that was created on your desk
5. select index.html
6. right click on the file and select _'open with'_
7. select your browser
8. enjoy this project


## Specs
### Behavior Driven Development Spec List

Behavoir | Input | Output
:---------:|:------:|:------:
| A user can Click start and see 2 faces |click | two faces are generated on the screen |
| 1. The program generates a fake face using a fake face generator API | Click | One of the two faces is fake |
| 2. The program generates a fake face using a random headshot generator API | Click | One of the two faces is a real headshot |
| 3. The program will generate a next button | Click | Two more faces are generated on screen |
| 4. The user can repeat steps 2-3 for however long they want | Click | Correct! or Incorrect! |
| The program will award a point for each correct guess the user submits | Click real face | User points: 1 |


## Support 

_The software is provided as is. It might work as expected - or not. Just don't blame me._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Alex Skreen and Eric Settels_**

