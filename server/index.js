// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.static('public'));

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// })

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
  prefix: '/',
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})