import { Socket, io } from 'socket.io-client';

export class SocketClient {
  socket: Socket<any, any> | null = null;

  connect() {
    this.socket = io('http://localhost:3000');
    return new Promise((res, rej) => {
      this.socket?.on('connect', () => res('Socket connection'));
      this.socket?.on('connect_error', () => rej('Error on connection'));
    });
  }

  disconnect() {
    return new Promise((res) => {
      this.socket?.disconnect();
      this.socket = null;
      res('Socket disconnected');
    });
  }

  emit(event: string, data: any) {
    return new Promise((res, rej) => {
      if (!this.socket) rej('No socket connection');
      return this.socket?.emit(event, data, () => {
        res(data);
      });
    });
  }

  on(event: string, cb: (response: any) => void) {
    return new Promise((res, rej) => {
      if (!this.socket) rej('No socket connection');
      this.socket?.on(event, cb);
      return res('Event got');
    });
  }
}
