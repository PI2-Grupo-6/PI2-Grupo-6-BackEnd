import express from 'express';
import FoodController from '../controller/FoodController';

const router = express.Router();

router.post('/', FoodController.createFood);
router.get('/', FoodController.getAll);
router.put('/:id', FoodController.update);
router.get('/:id', FoodController.get);
router.delete('/:id', FoodController.delete);

export default router;