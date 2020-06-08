const path = require("path");
require("dotenv").config();
const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: "file-loader",

      options: {
        outputPath: "images",
      },
    });
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
  // withFonts();
});
