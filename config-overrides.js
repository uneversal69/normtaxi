const { alias } = require("react-app-rewire-alias");

const aliasMap = {
  "@components": "src/components",
};

module.exports = alias(aliasMap);
