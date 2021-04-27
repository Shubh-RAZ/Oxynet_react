import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

dotenv.config({ path: './config.env' });

import routers from './routers/router.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));

const JWT_SECRET = process.env.JWT_SECRET

mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})
const PORT = 7000;

// const CONNECTION_URL = "mongodb://localhost/oxynet";
// const PORT = 7000;

app.use('/oxynet' , routers);

// mongoose.connect( CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true } )
// .then( () => app.listen( PORT, () => console.log(`Connection Established With MongoDB on port ${PORT}` ) ) )
// .catch( (error) => console.log(error.message) );

// mongoose.set('useFindAndModify', false);

// mongoose.connect( CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true } )
// .then( () => app.listen( PORT, () => console.log(`Connection Established With MongoDB on port ${PORT}` ) ) )
// .catch( (error) => console.log(error.message) );

// mongoose.set('useFindAndModify', false);
