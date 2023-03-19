const TerserPlugin = require("terser-webpack-plugin");
const SplitChunksPlugin = require("webpack").SplitChunksPlugin;

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new SplitChunksPlugin({
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    }),
  ],
};
