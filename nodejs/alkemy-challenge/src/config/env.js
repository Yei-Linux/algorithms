import { config } from 'dotenv';
config();

const GOOGLE = {
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
};
const AUTH = {
  jwtSeed: process.env.JWT_SEED,
  jwtAccessTokenExp: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
  jwtRefreshTokenExp: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
  sessionSeed: process.env.SESSION_SEED,
};

const DB = {
  dbName: process.env.DB_NAME,
  dbUserName: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
};

const SERVER = {
  serverPort: process.env.SERVER_PORT,
  serverUrl: process.env.SERVER_URL,
  frontendUrl: process.env.FRONT_URL,
};

export const envs = {
  ...GOOGLE,
  ...AUTH,
  ...DB,
  ...SERVER,
};
