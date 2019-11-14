/* eslint-disable */
const routes = require("./src/router/routes.json");
/* eslint-enable */
const renderRoutes = [];

routes.forEach(route => {
  if (route.prerender) renderRoutes.push(route.path);
});
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes,
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
