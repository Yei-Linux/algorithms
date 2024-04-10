import { Message } from '../store/slices/chat.slice';

export const fetchMessages = async () => {
  try {
    const promise = await fetch('http://localhost:3000/messages');
    const json = (await promise.json()) as { data: Message[] };

    return json.data;
  } catch (error) {
    return [];
  }
};
