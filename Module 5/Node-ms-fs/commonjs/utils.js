const path = require("path");

function getFilePath(filename) {
   return path.join(__dirname, "..", "data", filename);
};

function getNewPath(newName) {
   return path.join(__dirname, "..", "data", newName);
}

module.exports = { getFilePath, getNewPath };
