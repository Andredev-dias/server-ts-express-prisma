import routes from "./routes";
import cors from 'cors';
import express from 'express';

// inicializa;'ao do express
const app = express();

// defini as regras do servidor
// fala que vamos usar um json
app.use(express.json());

// que define como os dados serão interpretados:
app.use(express.urlencoded({extended: true})); 

// defini o cors - O cors é um middleware para aplicações Node.js com Express 
// que permite ou restringe requisições entre origens diferentes — ou seja,
//  requisições cross-origin.
app.use(cors());

// define as rotas
app.use(routes);

export default app;