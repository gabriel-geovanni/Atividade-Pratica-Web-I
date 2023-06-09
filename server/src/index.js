const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use('*', cors());
app.use(routes);
app.listen(3000, async () => {
  console.log('Server started at http://localhost:3000');
});
