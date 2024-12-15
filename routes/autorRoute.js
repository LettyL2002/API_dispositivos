import { Router } from 'express';
import { getAllAutores, getAutorPorNombre } from '../controllers/autorController.js';

const router = Router();

router.get('/', getAllAutores);
router.get('/:nombre', getAutorPorNombre);

export default router;
