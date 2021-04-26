import express from 'express';
import { getAllProd, addProduct, getByCity, deleteProd, report, getById, UpdateById } from '../Controllers/controller.js';

const router = express.Router();
router.get('/', getAllProd);
router.post('/addProduct', addProduct);
router.get('/getByCity/:city', getByCity);
router.delete('/delete', deleteProd);
router.post('/report', report);
router.get('/getById/:ep', getById);
router.put('/upadteById/:ep' , UpdateById);

export default router;
