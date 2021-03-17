import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => res.status(200).send('hello world'));

app.listen(port, () => console.log(`Listening at port ${port}`))
