// Built-in Modules
const os = require("os");
const fs = require("fs");
const path = require("path");
const http = require("http");

// Custom modules
const { getGreeting } = require("./utils");

// Use OS modules
console.log("System Info:");
console.log(`User: ${os.userInfo().username}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Updatime: ${os.uptime()} seconds`);
console.log();

// Use file system
const message = getGreeting(os.userInfo().username);
const filePath = path.join(__dirname, "message.txt");
fs.writeFileSync(filePath, message);
console.log(`Message written to ${filePath}`);

console.log();

// Create a basic HTTP server
const server = http.createServer((req, res) => {
   fs.readFile(filePath, "utf-8", (err,data) => {
      if (err) {
         res.writeHead(500, { "Content-Type": "text/plain"});
         res.end("Error reading file.");
         return;
      };

      res.writeHead(200, { "Content-Type": "text/html"} );
      res.end(`<h1>Node.js Demo</h1><p>${data}</p>`);
   });
});

const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Server running at localhost:${PORT}`);
});
