import { config } from 'dotenv';
config();

import { Sequelize } from 'sequelize';
import { envs } from '../env.js';

export const DB_CONFIG = {
  database: envs.dbName,
  username: envs.dbUserName,
  password: envs.dbPassword,
  host: envs.dbHost,
};

export const sequelize = new Sequelize(
  DB_CONFIG.database,
  DB_CONFIG.username,
  DB_CONFIG.password,
  {
    dialect: 'postgres',
    host: DB_CONFIG.host,
    port: envs.dbPort,
  }
);
