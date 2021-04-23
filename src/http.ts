import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

import './database';
import { routes } from './routes';

const app = express();
const port = 3333;

app.use(express.static(path.join(__dirname, '..', 'public')))
    .set('views', path.join(__dirname, '..', 'public'))
    .engine('html', require('ejs').renderFile)
    .set('view engine', 'html')
    .get('/pages/client', (req, res)=>{
        res.render('html/client.html')
    })

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Conectado", socket.id);
})

app
    .use(express.json())
    .use(routes);

export { http, io, port };