import express from 'express';
import RestaurantController from '../controller/RestaurantController';

const router = express.Router();

router.get('/', RestaurantController.getAll);
router.get('/:id', RestaurantController.get);

router.put('/:id', RestaurantController.update);

router.post('/', RestaurantController.createRestaurant);

router.delete('/:id', RestaurantController.delete);

export default router;