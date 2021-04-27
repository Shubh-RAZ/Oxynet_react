import express from 'express';
import { getAllProd, addProduct, getByCity, deleteProd, report, getById, UpdateById } from '../Controllers/controller.js';

const router = express.Router();
router.get('/', getAllProd);
router.post('/addProduct', addProduct);
router.get('/getByCity?', getByCity);
router.delete('/delete', deleteProd);
router.post('/report', report);
router.get('/getById/?', getById);
router.put('/upadteById/?' , UpdateById);

export default router;
