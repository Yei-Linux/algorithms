import express from 'express';
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';

import { charactersRouter } from './router/characters.route.js';
import { movieRouter } from './router/movies.route.js';
import { AuthRouter } from './router/auth.route.js';

import { errorMiddleware } from './middlewares/error.middleware.js';
import { authMiddleware } from './middlewares/auth.middleware.js';
import { specs, swaggerUI } from './config/swagger.js';
import { envs } from './config/env.js';
import './config/passport/index.js';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: envs.sessionSeed,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authMiddleware);

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/v1/characters', charactersRouter);
app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/auth', AuthRouter);

app.use(errorMiddleware);

export { app };
