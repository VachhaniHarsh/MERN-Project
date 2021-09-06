import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './API/api.js';
import bodyParser from 'body-parser';
import cors from 'cors';



dotenv.config()

const PORT=4000;
const app=express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api',router);

// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD;
connection();

app.listen(PORT, ()=>console.log(`racist bholu says Hello ${PORT}`));

