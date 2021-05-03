const TYPES = {
  BLOCK_COMMENT: "BlockComment",
  IDENTIFIER: "Identifier",
  STRING: "String",
};

const ACCEPTED_TYPES = [...Object.values(TYPES)];

module.exports = {
  TYPES,
  ACCEPTED_TYPES,
};
