const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>xxxx sayfasina hosgeldiniz</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>about page</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>contact page</h1>");
  }
  else if (url === "/index") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>index page</h1>");
  }  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 page</h1>");
  }

  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
