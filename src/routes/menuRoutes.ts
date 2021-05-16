import express from 'express';
import MenuController from '../controller/MenuController';

const router = express.Router();

router.get('/', MenuController.getAll);
router.get('/:id', MenuController.get);

router.put('/:id', MenuController.update);

router.post('/', MenuController.createMenu);

router.delete('/:id', MenuController.delete);

export default router;