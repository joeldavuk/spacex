module.exports = {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-order"],
  rules: {
    "color-hex-length": "long",
    "order/order": [
      "custom-properties",
      "declarations",
      {
        type: "rule",
        selector: /^&/,
      },
      {
        type: "at-rule",
        name: "media",
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "property-no-unknown": true,
    "number-leading-zero": "always",
  },
};
