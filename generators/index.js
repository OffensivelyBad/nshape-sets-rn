const fs = require('fs');
const componentGenerator = require('./component/index.js');
// const actionGenerator = require("./action/index.js");

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  // plop.setGenerator("action", actionGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(`src/containers/${comp}`, fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (_object, open) => (open ? '{' : '}'));
};
