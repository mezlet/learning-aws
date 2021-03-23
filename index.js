import 'dotenv/config';
import express from 'express';

const app = express();
const port = 9000;

app.get('/', (req, res) => res.status(200).send('hello world'));

app.listen(port, () => console.log(`Listening at port ${port}`))
