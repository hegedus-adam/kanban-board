const express = require('express');
const cors =  require('cors');
const router = require('./router').router;

const app = express();
const port = 4100;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Identity service listening at http://localhost:${port}`);
});
