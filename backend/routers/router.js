import express from 'express';
import { getAllProd, addProduct, getByCity, report, getById, UpdateById, addProducer, deleteAllByEmail, deleteCardByEmail, reportArray } from '../Controllers/controller.js';

const router = express.Router();
router.get('/', getAllProd);
router.post('/addProduct', addProduct);
router.post('/addProducer', addProducer);
router.get('/getByCity?', getByCity);
router.delete('/deleteAll', deleteAllByEmail);
router.delete('/deleteCard', deleteCardByEmail);
router.post('/report', report);
router.post('/reportArray', reportArray);
router.get('/getById/?', getById);
router.post('/updateById' , UpdateById);

export default router;
