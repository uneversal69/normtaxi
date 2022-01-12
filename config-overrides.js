const { alias } = require("react-app-rewire-alias");

const aliasMap = {
  "@components": "src/components",
  "@modules": "src/modules",
  "@utils": "src/utils",
};

module.exports = alias(aliasMap);
