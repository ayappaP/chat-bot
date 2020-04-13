module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
      },
    ],

    [
      "@babel/preset-react",
      {
        development: process.env.NODE_ENV === "development",
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ],
}
