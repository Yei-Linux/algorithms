import { app } from './app.js';
import { dbInstance } from './config/database/index.js';

(async () => {
  try {
    await dbInstance.start();

    app.listen(3000, () => {
      console.log('Server up');
    });
  } catch (error) {
    console.warn(error.message);
    process.exit(1);
  }
})();
