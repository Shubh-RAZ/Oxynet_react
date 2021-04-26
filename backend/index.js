import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import routers from './routers/router.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));


const CONNECTION_URL = "mongodb://localhost/oxynet";
const PORT = 7000;

app.use('/oxynet' , routers);

mongoose.connect( CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true } )
.then( () => app.listen( PORT, () => console.log(`Connection Established With MongoDB on port ${PORT}` ) ) )
.catch( (error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);
