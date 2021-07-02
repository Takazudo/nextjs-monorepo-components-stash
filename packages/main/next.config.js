const withTM = require("next-transpile-modules")(["@myapp/shared"]);

module.exports = withTM({
  reactStrictMode: true,
});
