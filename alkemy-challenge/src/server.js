import { config } from 'dotenv';
config();

import { app } from './app.js';
import { dbConfig } from './config/db.js';
import { sequelize } from './config/db.instance.js';

const port = process.env.PORT;
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