import { DataTypes } from 'sequelize';
import { db } from '../index.js';
import { UserModel } from './User.model.js';
import { CategoryModel } from './Category.model.js';

export const NoteModel = db.define(
  'Note',
  {
    note: DataTypes.STRING,
  },
  {
    tableName: 'notes',
  }
);

export const NoteCategoriesModel = db.define(
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
