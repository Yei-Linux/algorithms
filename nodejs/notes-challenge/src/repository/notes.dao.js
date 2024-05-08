import { NoteModel } from '../config/database/models/Note.model.js';
import { CrudDao } from './crud.dao.js';

export class NotesDao extends CrudDao {
  constructor() {
    super(NoteModel);
  }
}
