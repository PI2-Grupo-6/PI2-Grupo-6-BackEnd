import express from 'express';
import foodRoutes from './routes/foodRoutes';
import orderRoutes from './routes/orderRoutes';
import menuRoutes from './routes/menuRoutes';

const routes = express.Router();

routes.use('/foods', foodRoutes);
routes.use('/orders', orderRoutes);
routes.use('/menu', menuRoutes);

export default routes;