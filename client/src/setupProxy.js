const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy(
      [
        "/auth/google",
        "/api/current_user",
        "/api/logout",
        "/surveys",
        "/api/stripe"
      ],
      {
        target: "http://localhost:5000",
        secure: false,
        changeOrigin: true
      }
    )
  );
};
