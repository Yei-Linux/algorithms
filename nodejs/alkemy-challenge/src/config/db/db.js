import { DatabaseError } from '../../errors/db.error.js';
import { MoviesModel } from '../../models/Movies.model.js';
import { GendersModel } from '../../models/Genders.model.js';
import { CharactersModel } from '../../models/Characters.model.js';
import { seedData } from './db.seed.js';
import { MovieCharactersModel } from '../../models/MovieCharacters.model.js';
import { UsersModel } from '../../models/Users.model.js';
import { UserTokensModel } from '../../models/UserTokens.models.js';
import { AccountModel } from '../../models/Account.model.js';

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

    UsersModel.hasOne(UserTokensModel, {
      foreignKey: { name: 'userId', allowNull: false },
    });
    UserTokensModel.belongsTo(UsersModel, {
      foreignKey: { name: 'userId', allowNull: false },
    });

    UsersModel.hasMany(AccountModel, {
      foreignKey: { name: 'userId', allowNull: false },
    });
    AccountModel.belongsTo(UsersModel, {
      foreignKey: { name: 'userId', allowNull: false },
    });

    seed && (await seedData());

    await db.sync();
  } catch (error) {
    throw new DatabaseError('Database connection error: ' + error.message);
  }
};
