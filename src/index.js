const {
  readEvents,
  tokenize,
  filterValidTypes,
  generateObject,
  generateFile,
} = require("./utils");

function main() {
  const filePath = process.argv.slice(2)[0];

  if (!filePath) {
    console.error("⚠️  You must provide a filepath to process");
    return;
  }

  const eventsText = readEvents(filePath);

  if (eventsText) {
    const tokens = tokenize(eventsText);
    const validTypes = filterValidTypes(tokens);
    const data = generateObject(validTypes);
    generateFile("data.json", data);
  }
}

main();
