import { DecksDao } from '../repository/decks.dao.js';

export class DeckController {
  deckDao;

  constructor() {
    this.deckDao = new DecksDao();
  }

  getAll = async (req, res, next) => {
    try {
      const data = await this.deckDao.getAll();
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.deckDao.getOne(id);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const data = await this.deckDao.create(req.body);
      res.status(201).send({ data });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.deckDao.update(id, req.body);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.deckDao.delete(id);
      res.status(200).send({ message: 'Item removed' });
    } catch (error) {
      next(error);
    }
  };
}
