require('dotenv').config();
const server = require('./api/server.js');

//changed port from 3300 to 5000 as reusing Postman setup from previous day
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
