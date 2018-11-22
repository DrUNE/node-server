function hello(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ message: "Hello there!!!" }));
}

export default {
  hello
};
