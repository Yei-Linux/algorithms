import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../sequelize';
import { NoteModel } from './Note.model.js';
import { UserModel } from './User.model.js';

export const DeckModel = sequelizeDB.define('Deck', {
  name: DataTypes.STRING,
});

NoteModel.belongsTo(DeckModel, {
  as: 'deck',
  foreignKey: 'deck_id',
});
DeckModel.hasMany(NoteModel, {
  as: 'notes',
  foreignKey: 'deck_id',
});

DeckModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'user_id',
});
UserModel.hasMany(DeckModel, {
  as: 'decks',
  foreignKey: 'user_id',
});
