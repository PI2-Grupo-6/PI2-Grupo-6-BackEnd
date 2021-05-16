import express from 'express';
import MachineController from '../controller/MachineController';

const router = express.Router();

router.get('/', MachineController.getAll);
router.get('/:id', MachineController.get);

router.put('/:id', MachineController.update);

router.post('/', MachineController.createMachine);

router.delete('/:id', MachineController.delete);

export default router;