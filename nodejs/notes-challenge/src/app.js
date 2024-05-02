import express from 'express';
import cors from 'cors';
import { CategoryRouter, DeckRouter, NoteRouter, UserRouter } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(CategoryRouter.router, '/api/categories');
app.use(NoteRouter.router, '/api/notes');
app.use(DeckRouter.router, '/api/decks');
app.use(UserRouter.router, '/api/users');

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

export { app };
