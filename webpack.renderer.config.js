const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
