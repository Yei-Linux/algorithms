import { NotesDao } from '../repository/notes.dao.js';

export class NoteController {
  noteDao;

  constructor() {
    this.noteDao = new NotesDao();
  }

  getAll = async (req, res, next) => {
    try {
      const data = await this.noteDao.getAll();
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.noteDao.getOne(id);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  create = async (req, res, next) => {
    try {
      const data = await this.noteDao.create(req.body);
      res.status(201).send({ data });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await this.noteDao.update(id, req.body);
      res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  };
  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.noteDao.delete(id);
      res.status(200).send({ message: 'Item removed' });
    } catch (error) {
      next(error);
    }
  };
}
 