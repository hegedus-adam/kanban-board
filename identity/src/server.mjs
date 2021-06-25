import express from 'express';
import cors from 'cors';

const app = express();
const port = 4100;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Identity service');
});

app.listen(port, () => {
  console.log(`Identity service listening at http://localhost:${port}`);
});
