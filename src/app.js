import 'dotenv/config';

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // receber requisições via json
  }

  routes() {
    this.server.use(routes); // todas as rotas da aplicação
  }
}

export default new App().server;
