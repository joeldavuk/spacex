// lint-staged.config.js
const fs = require("fs");

const configPath = "tsconfig.lint.json";

const generateTSConfig = (stagedFilenames) => {
  try {
    if (fs.existsSync(configPath)) {
      fs.unlinkSync(configPath);
    }
    const files = stagedFilenames.reduce((acc, filename) => {
      if (fs.existsSync(filename)) {
        return [...acc, filename];
      }
      return acc;
    }, []);
    const tsConfig = {
      extends: "./tsconfig.json",
      files: files,
    };
    fs.writeFileSync(configPath, JSON.stringify(tsConfig));
  } catch (err) {
    console.log("Error: generateTSConfig", err);
  }
  return "tsc --noEmit --project tsconfig.lint.json";
};

module.exports = {
  "*.css": ["prettier --write", "stylelint"],
  "*.{json,md,yml}": "prettier --write",
  "*/*.js": [
    "prettier --write",
    "eslint --cache --cache-strategy content --fix",
  ],
  "**/*.ts?(x)": [
    "prettier --write",
    "eslint --cache --cache-strategy content --fix",
    generateTSConfig,
  ],
};
