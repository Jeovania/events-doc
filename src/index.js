const {
  readEvents,
  tokenize,
  filterValidTypes,
  generateObject,
  generateFile,
} = require("./utils");

function main() {
  const filePath = process.argv.slice(2)[0];
  const eventsText = readEvents(filePath);

  if (eventsText) {
    const tokens = tokenize(eventsText);
    const validTypes = filterValidTypes(tokens);
    const data = generateObject(validTypes);
    generateFile("data.json", data);
  }
}

main();
