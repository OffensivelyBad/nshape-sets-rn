// import fs from "fs";
const fs = require('fs');

const components = fs.readdirSync("./src/components");

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
