import express from 'express';
import FoodController from '../controller/FoodController';

const router = express.Router();

router.get('/', FoodController.getAll);
router.get('/:id', FoodController.get);

router.put('/:id', FoodController.update);

router.post('/', FoodController.createFood);

router.delete('/:id', FoodController.delete);

export default router;