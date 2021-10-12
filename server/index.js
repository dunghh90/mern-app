import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL

app.use(express.json({limit: '30mb'}))
app.use(express.urlencoded({extended:true, limit: '30mb'}))
app.use(cors());

app.use('/post', posts)

mongoose
  .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to Mongoose')
    app.listen(PORT, () => {
      console.log('listening on port ' + PORT)
    })
  })
  .catch((err) => {
    console.error('err', err)
  });