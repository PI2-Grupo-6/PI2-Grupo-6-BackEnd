import express from 'express';
import foodRoutes from './routes/foodRoutes';

const routes = express.Router();

routes.use('foods/', foodRoutes);