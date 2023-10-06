import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
import './config/db.js';

import connectDB from './config/db.js';

import voteRoutes from './Routes/vote.routes.js';

const app = express();
app.use(json());
app.use(cookieParser());

connectDB();

app.use(helmet());

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'PUT'],
};
app.use(cors(corsOptions));

// //routes
app.use('/api/vote', voteRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
