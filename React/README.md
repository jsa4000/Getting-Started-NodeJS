# README

## Create React Project

```bash
#  Create default react project using npx
npx create-react-app react-example
# change into the directory
cd react-example
# Build the project
npm run build
# Run the tests
npm test
# Run the project
npm start
```

## Material-UI

```bash
#  Install Material UI - Core
npm install @material-ui/core --save
# Install Material UI icons
npm install @material-ui/icons
# Install Material UI styles
npm install @material-ui/styles
```

## Upgrade npm

```bash
# Upgrade npm and nodejs to latest version
npm update npm -g
```

## JavaScript Tips

### Arrow Functions vs Traditional

In general there are some benefits and disadvantage by using both options. The cool way nowadays is to declare the functions using arrow functions assigned to a const.

> [Arrow Functions vs Traditional Functions in JavaScript](https://medium.com/the-non-traditional-developer/arrow-functions-vs-traditional-functions-in-javascript-8ff1a48ede12)

```js

// Old ways to declare a function in java script
function log(text) {
    console.log(text);
}

const log = function(text) {
    console.log(text);
}

log('This is a log')

// New way to declare a function using Arrow function
const log = (text) => {
     console.log(text);
}

// New way to declare a function using Arrow function
const log = (text) =>  console.log(text);

log('This is a log')
```

## References

- [Setup React application](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-create-react-app)
- [Tutorial React & Material I](https://medium.com/swlh/building-your-first-web-page-with-react-and-material-ui-287461c5f58a)
- [Tutorial Material & API Rest](https://medium.com/better-programming/how-to-use-material-ui-to-bring-material-design-to-react-a327c875ab86)
- [Material UI Icons](https://material-ui.com/components/icons/)
- [React API](https://pusher.com/tutorials/consume-restful-api-react)
- [React Folder Structure in 5 Steps](https://www.robinwieruch.de/react-folder-structure)