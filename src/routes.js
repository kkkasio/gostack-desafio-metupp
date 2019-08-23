import { Router } from 'express';
import UserController from './app/controllers/userController';

const routes = Router();

routes.post('/users', UserController.store);
export default routes;
