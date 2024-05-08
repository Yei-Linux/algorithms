import express from 'express';
import cors from 'cors';
import {
  CategoryRouter,
  DeckRouter,
  NoteRouter,
  UserRouter,
} from './routes/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/categories', CategoryRouter.router());
app.use('/api/notes', NoteRouter.router());
app.use('/api/decks', DeckRouter.router());
app.use('/api/users', UserRouter.router());

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use(errorMiddleware);

export { app };
