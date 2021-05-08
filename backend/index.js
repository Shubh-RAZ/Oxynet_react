import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import routers from './routers/router.js';

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

const app = express()
app.use(bodyParser.json())
app.use(cors())

// app.use('/oxynet', function (req, res, next) {
// 	console.log('Request Type:', req.query)
// 	next()
// })

app.use('/oxynet',routers)

const port = process.env.PORT;
const server = app.listen(port, () => {
//  console.log(`App running on port ${port}...`);
});