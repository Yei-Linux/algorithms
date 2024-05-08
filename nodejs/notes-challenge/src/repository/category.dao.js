import { CategoryModel } from '../config/database/models/Category.model.js';
import { CrudDao } from './crud.dao.js';

export class CategoryDao extends CrudDao {
  constructor() {
    super(CategoryModel);
  }
}
