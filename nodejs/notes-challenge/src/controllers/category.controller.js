import { CategoryDao } from '../repository/category.dao.js';

export class CategoryController {
  categoryDao;

  constructor() {
    this.categoryDao = new CategoryDao();
  }

  getAll = async (req, res, next) => {
    try {
      const data = await this.categoryDao.getAll();
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.categoryDao.getOne(id);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const data = await this.categoryDao.create(req.body);
      res.status(201).send({ data });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.categoryDao.update(id, req.body);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.categoryDao.delete(id);
      res.status(200).send({ message: 'Item removed' });
    } catch (error) {
      next(error);
    }
  };
}
