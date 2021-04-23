import { http, port } from './http';
import './websocket/client';

http.listen(port, () => {
    console.log(`Servidor aberto na porta ${port}`);
});