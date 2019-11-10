module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.NETLIFY
        ? "/"
        : "/NV-HR-LAB/"
      : "/"
};
