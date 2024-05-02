import { Sequelize } from 'sequelize';

export class SequelizeORM {
  sequelizeDB;

  constructor({ database, username, password, host, port }) {
    this.sequelizeDB = new Sequelize(database, username, password, {
      host,
      dialect: 'postgres',
      port,
    });
  }

  start() {
    this.sequelizeDB.sync();
  }
}
