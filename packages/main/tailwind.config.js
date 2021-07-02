const shared = require("@myapp/shared/tailwind.config");

shared.purge = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "../shared/pages/**/*.{js,ts,jsx,tsx}",
  "../shared/components/**/*.{js,ts,jsx,tsx}",
];

module.exports = shared;
