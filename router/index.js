const url = require("url");
const routs = require("./routs");
const notFound404 = require("./notFound404");

module.exports = function router(request, response) {
  const path = parsePath(request.url);
  const handle = routs[path] || notFound404;
  handle(request, response);
};

function parsePath(urlString) {
  const urlObject = url.parse(urlString, true);
  const pathname = urlObject.pathname || "";
  return pathname.replace(/^\/+|\/+$/g, "");
}
