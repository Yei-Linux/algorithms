import { DatabaseError } from '../../errors/db.error.js';
import { MoviesModel } from '../../models/Movies.model.js';
import { GendersModel } from '../../models/Genders.model.js';
import { CharactersModel } from '../../models/Characters.model.js';
import { seedData } from './db.seed.js';
import { MovieCharactersModel } from '../../models/MovieCharacters.model.js';
import { UsersModel } from '../../models/Users.model.js';

export const dbConfig = async (db, seed = false) => {
  try {
    await db.authenticate();

    MoviesModel.belongsToMany(CharactersModel, {
      through: MovieCharactersModel,
      foreignKey: 'movieId',
      otherKey: 'characterId',
    });
    CharactersModel.belongsToMany(MoviesModel, {
      through: MovieCharactersModel,
      foreignKey: 'characterId',
      otherKey: 'movieId',
    });

    GendersModel.hasMany(MoviesModel, { foreignKey: 'genderId' });
    MoviesModel.belongsTo(GendersModel, { foreignKey: 'genderId' });

    UsersModel.hasMany(MoviesModel, { foreignKey: 'createdUserId' });
    MoviesModel.belongsTo(UsersModel, { foreignKey: 'createdUserId' });

    seed && (await seedData());

    await db.sync();
  } catch (error) {
    throw new DatabaseError('Database connection error: ' + error.message);
  }
};
