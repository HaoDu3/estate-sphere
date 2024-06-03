import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import {database} from './config.mjs';
import authRoutes from './routes/auth.mjs';
import { config } from 'dotenv';
import adRoute from './routes/ad.mjs';

// create an instance of express application which has methods for routing http requests,configuring middleware.
const app = express();

//db connection
mongoose.connect(database)
.then(() => console.log('DB connected'))
.catch(err => console.log('DB connection error', err));


/// Middleware
// adding middleware to parse json date from the request into javascript object and enables us to export json data
// Morgan is a middleware that ogs http requests
// Cors is a middleware that allows cross-origin resource sharing 
app.use(express.json({limit: '`10mb'}));
app.use(morgan('dev'));
app.use(cors());

//routes middleware
// use authRoutes for any route that starts with /api
app.use('/api', authRoutes);
app.use('/api', adRoute);




// app.listen() is a method in express that starts a server and listens on a specified port
app.listen(8000, () =>{
    console.log('Server is running on port 8000');
});