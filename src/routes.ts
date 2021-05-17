import express from 'express';
import userRoutes from './routes/userRoutes'

const router = express.Router();

// router.use('/foods', foodRoutes);
// router.use('/machines', machineRoutes);
// router.use('/menu', menuRoutes);
// router.use('/orders', orderRoutes);
// router.use('/restaurants', restaurantRoutes)
router.use('/users', userRoutes)

export default router;