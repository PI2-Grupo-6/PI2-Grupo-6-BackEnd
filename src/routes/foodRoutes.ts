import express from 'express';
import FoodController from '../controller/FoodController';

const router = express.Router();

router.post('/', FoodController.createFood);
router.put('/:id', FoodController.update);

export default router;