const {
  readEvents,
  tokenize,
  filterValidTypes,
  generateObject,
  generateFile,
} = require("./utils");

function main() {
  const eventsText = readEvents("./examples/index.js");

  if (eventsText) {
    const tokens = tokenize(eventsText);
    const validTypes = filterValidTypes(tokens);
    const data = generateObject(validTypes);
    generateFile("data.json", data);
  }
}

main();
