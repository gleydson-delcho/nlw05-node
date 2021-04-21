import express from 'express';

import './database';
import { routes } from './routes';

const app = express();
const port = 3333;

app
    .use(express.json())
    .use(routes)
    .listen(port,()=> {
    console.log(`Servidor aberto na porta ${port}`);
});