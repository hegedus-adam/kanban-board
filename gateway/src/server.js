const express = require('express');
const cors = require('cors');
const { router } = require('./router');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`API Gateway service listening at http://localhost:${port}`);
});
