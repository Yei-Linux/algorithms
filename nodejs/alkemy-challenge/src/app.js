import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import { charactersRouter } from './router/characters.route.js';
import { movieRouter } from './router/movies.route.js';
import { AuthRouter } from './router/auth.route.js';

import { errorMiddleware } from './middlewares/error.middleware.js';
import { authMiddleware } from './middlewares/auth.middleware.js';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(authMiddleware);

app.use('/api/v1/characters', charactersRouter);
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/auth', AuthRouter);

app.use(errorMiddleware);

export { app };
