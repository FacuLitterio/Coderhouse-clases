const path = require("path");

module.exports = {
  REACT_APP_PATH: path.join(
    __dirname,
    "..",
    "..",
    "shop-frontend",
    "build",
    "index.html"
  ),
};
