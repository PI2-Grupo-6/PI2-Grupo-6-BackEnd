import express from "express";
import OrderController from '../controller/OrderController';

const router = express.Router();

router.get('/', OrderController.getAll);
router.get('/:id', OrderController.get);

router.put('/:id', OrderController.update);

router.post('/', OrderController.createOrder);

router.delete('/:id', OrderController.delete);

export default router;