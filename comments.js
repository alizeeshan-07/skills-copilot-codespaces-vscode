// Create web server
// Create a web server that listens for requests on port 3000 and serves the comments.html file using the fs module.
// The comments.html file should be served in response to requests for the /comments URL path.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('comments.html', (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  } else {
    res.end('Not Found');
  }
});

server.listen(3000);