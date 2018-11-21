const http = require("http");
const router = require("./router");
const { port } = require("./config");

const server = http.createServer(router).listen(port, onServerStart);

function onServerStart() {
  console.log(`Server is running now on port ${port}`);
}
