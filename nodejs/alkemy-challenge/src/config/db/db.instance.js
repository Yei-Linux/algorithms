import { config } from 'dotenv';
config();

import { Sequelize } from 'sequelize';

export const DB_CONFIG = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
};

export const sequelize = new Sequelize(
  DB_CONFIG.database,
  DB_CONFIG.username,
  DB_CONFIG.password,
  {
    dialect: 'postgres',
    host: DB_CONFIG.host,
    port: process.env.DB_PORT,
  }
);
