import { config } from 'dotenv';
config();

import { app } from './app.js';
import { dbConfig } from './config/db/db.js';
import { sequelize } from './config/db/db.instance.js';
import { envs } from './config/env.js';

const port = envs.serverPort;

(async () => {
  try {
    await dbConfig(sequelize, true);

    app.listen(port, () => {
      console.log('Server up');
    });
  } catch (error) {
    console.warn('Error: ', error.message);
  }
})();
