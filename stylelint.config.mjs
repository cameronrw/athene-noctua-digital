export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-alphabetical-order": true,
  },
};
