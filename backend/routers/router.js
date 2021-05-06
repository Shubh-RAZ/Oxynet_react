import express from 'express';
import { getAllProd, addProduct, getByCity, report, getById, UpdateById, addProducer, deleteCardByEmail, reportArray, reportArrayLength, deleteMarketByEmail, getByState } from '../Controllers/controller.js';

const router = express.Router();
router.get('/', getAllProd);
router.post('/addProduct/:email', addProduct);
router.post('/addProducer', addProducer);
router.get('/getByCity/:city', getByCity);
router.get('/getByState/:state', getByState);
router.delete('/deleteAll/:email', deleteMarketByEmail);
router.delete('/deleteCard/:email/:id', deleteCardByEmail);
router.post('/report/:email/:id', report);
router.get('/reportedArray/:email/:id', reportArray);
router.get('/reportedArraylength/:email/:id', reportArrayLength);
router.get('/getById/:id', getById);
router.post('/updateById/:email/:id' , UpdateById);

export default router;
