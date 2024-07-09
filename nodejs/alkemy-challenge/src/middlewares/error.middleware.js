import { BadRequestError } from '../errors/bad-request.error.js';

export const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    return res.status(200).send('Request completed');
  }

  const { message } = compose(
    tryParseErrorMessage,
    formatBadRequestMessage
  )({ error, message: error.message });

  res.status(500).send({
    message,
  });
};

const formatBadRequestMessage = ({ error, message }) => {
  if (!error instanceof BadRequestError) return { error, message };
  if (!Array.isArray(message)) return { error, message };

  const messages = message.map(({ path: [field], message }) => ({
    field,
    message,
  }));
  return { error, message: messages };
};

const tryParseErrorMessage = ({ error, message }) => {
  try {
    const messageJSON = JSON.parse(message);
    return { error, message: messageJSON };
  } catch (error) {
    return { error, message };
  }
};

const compose =
  (...functions) =>
  (params) => {
    let newParams = params;
    functions.forEach((fn) => {
      newParams = fn(newParams);
    });

    return newParams;
  };
