// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  "extends": ["plugin:vue/vue3-recommended", "eslint:recommended", "prettier"],
  "rules": {
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off"
  }
)


