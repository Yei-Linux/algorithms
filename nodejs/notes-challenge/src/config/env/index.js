import 'dotenv/config';
import envVar from 'env-var';

const { get } = envVar;

const DB_ENVS = {
  DB_NAME: get('DB_NAME').required().asString(),
  DB_USER: get('DB_USER').required().asString(),
  DB_PASSWORD: get('DB_PASSWORD').required().asString(),
  DB_PORT: get('DB_PORT').required().asPortNumber(),
  DB_HOST: get('DB_HOST').required().asString(),
};

export const env = {
  ...DB_ENVS,
};
