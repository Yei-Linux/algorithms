import express, { Application, Request, Response } from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { v4 } from 'uuid';
import { Server } from 'socket.io';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const port = 3000;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://127.0.0.1:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: '¨*',
    credentials: true,
  },
});

const db: Array<{ text: string; userId: string }> = [];

app.get('/messages', (req: Request, res: Response) => {
  res.send({
    data: db,
  });
});

io.on('connection', (socket) => {
  console.log('Start Connection', socket.id);

  socket.on(
    'global chat',
    ({ text, userId }: { text: string; userId: string }) => {
      const message = { text, userId, id: v4() };
      db.push(message);

      io.emit('global chat', message);
    }
  );

  socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(port, () => {
  console.log('Server started!');
});
