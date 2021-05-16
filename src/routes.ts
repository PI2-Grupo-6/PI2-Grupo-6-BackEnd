import express from 'express';
import foodRoutes from './routes/foodRoutes';
import orderRoutes from './routes/orderRoutes';
import menuRoutes from './routes/menuRoutes';
import machineRoutes from './routes/machineRoutes';
import restaurantRoutes from './routes/restaurantRoutes';

const routes = express.Router();

routes.use('/foods', foodRoutes);
routes.use('/machines', machineRoutes);
routes.use('/menu', menuRoutes);
routes.use('/orders', orderRoutes);
routes.use('/restaurants', restaurantRoutes)

export default routes;