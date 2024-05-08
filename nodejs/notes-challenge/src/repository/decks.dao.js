import { DeckModel } from '../config/database/models/Deck.mode.js';
import { CrudDao } from './crud.dao.js';

export class DecksDao extends CrudDao {
  constructor() {
    super(DeckModel);
  }
}
