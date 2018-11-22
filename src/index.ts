import { createServer } from "http";
import router from "./router";
import config from "./config";

const { port } = config;
const server = createServer(router).listen(port, onServerStart);

function onServerStart() {
  console.log(`Server is running now on port ${port}`);
}
