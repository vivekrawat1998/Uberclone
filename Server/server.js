const http = require('http');
const app = require('./app'); // Your Express app
const port = process.env.PORT || 3000;
const { initializeSocket } = require("./socket"); // Import socket setup

const server = http.createServer(app);

// Pass the server to initialize socket.io
initializeSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
