import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../sequelize';
import { UserModel } from './User.model.js';

export const NoteModel = sequelizeDB.define(
  'Note',
  {
    note: DataTypes.STRING,
  },
  {
    tableName: 'notes',
  }
);

export const NoteCategoriesModel = sequelizeDB.define(
  'NoteCategories',
  {
    noteId: {
      type: DataTypes.INTEGER,
      references: { model: NoteModel, key: 'id' },
    },
    actorId: {
      type: DataTypes.INTEGER,
      references: { model: CategoryModel, key: 'id' },
    },
  },
  { tableName: 'note_categories' }
);

CategoryModel.belongsToMany(NoteModel, {
  through: NoteCategoriesModel,
});
NoteModel.belongsToMany(CategoryModel, {
  through: NoteCategoriesModel,
});

NoteModel.belongsTo(UserModel, {
  as: 'user',
  foreignKey: 'user_id',
});
UserModel.hasMany(NoteModel, {
  as: 'notes',
  foreignKey: 'user_id',
});
