import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.get);

router.put('/:id', UserController.update);

router.post('/', UserController.createUser);

router.delete('/:id', UserController.delete);

export default router;