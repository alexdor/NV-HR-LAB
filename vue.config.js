module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.NETLIFY
        ? "/"
        : "/NV-HR-LAB/"
      : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
