module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/borisbot_tt/" : "/",
  devServer: {
    compress: true,
    hot: true,
    open: true,
    port: 8991,
  },
};