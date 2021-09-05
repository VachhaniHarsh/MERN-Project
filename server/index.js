import express from 'express';
import dotenv from 'dotenv';

import connection from './database/db.js';


dotenv.config()

const PORT=4000;
const app=express();

// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD;
connection();

app.listen(PORT, ()=>console.log(`racist bholu says Hello ${PORT}`));