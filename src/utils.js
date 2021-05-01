const esprima = require("esprima");
const fs = require("fs");
const { TYPES, ACCEPTED_TYPES } = require("./types");

/**
 * Read and return a file content
 * @param {string} filePath
 * @returns {string} File content
 */
const readEvents = (filePath) =>
  fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    return data;
  });

/**
 * Analyze the file syntax
 * @param {string} text
 * @returns {Array} Syntax of file
 */
const tokenize = (text) => esprima.tokenize(text, { comment: true });

/**
 * Filter for valid information
 * @param {Array} arr
 * @returns {Array} array of valid params
 */
const filterValidTypes = (arr) =>
  arr.filter((item) => ACCEPTED_TYPES.includes(item.type));

/**
 *
 * @param {Array} arr
 * @returns
 */
const generateObject = (arr) => {
  let newArr = [];
  let obj = {};

  for (let index = 0; index < arr.length; index += 2) {
    if (arr[index].type === TYPES.BLOCK_COMMENT) {
      if (obj.description) {
        newArr.push(obj);
        obj = {};
      }

      obj.description = arr[index].value;
    } else if (arr[index].type === TYPES.IDENTIFIER) {
      obj[arr[index].value] = arr[index + 1].value.replace(/"/g, "");
    }
  }

  newArr.push(obj);
  return newArr;
};

const generateFile = (fileName, arr) => {
  const tokenJson = JSON.stringify(arr);
  fs.writeFileSync(fileName, tokenJson);
};

module.exports = {
  readEvents,
  tokenize,
  filterValidTypes,
  generateObject,
  generateFile,
};
