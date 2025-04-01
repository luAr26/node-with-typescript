import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req.method);
  res.end("Hello World!");
});

server.listen(3000, () => {
  console.log("Listening on port 3000...");
});
