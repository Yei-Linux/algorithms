import express from 'express';
import cors from 'cors';
import { charactersRouter } from './router/characters.route.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { movieRouter } from './router/movies.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/characters', charactersRouter);
app.use('/api/v1/movies', movieRouter);

app.use(errorMiddleware);

export { app };
