import { dbConfig } from './config.js';
import { SequelizeORM } from './sequelize.js';

const configParamsConnection = dbConfig['local'];

export const dbInstance = new SequelizeORM(configParamsConnection);
export const db = dbInstance.sequelizeDB;
