import { NotFoundError } from '../errors/not-found.error.js';
import { CharactersModel } from '../models/Characters.model.js';
import { MovieCharactersModel } from '../models/MovieCharacters.model.js';

export class CharacterService {
  async getAll() {
    const characters = await CharactersModel.findAll({
      attributes: ['id', 'image', 'name'],
    });

    return characters;
  }

  async getById(id) {
    const character = await CharactersModel.findByPk(id);
    if (!character) {
      throw new NotFoundError('The character was not found');
    }

    return character;
  }

  async create(character) {
    console.log(character);
    const result = await CharactersModel.create(character);
    return result;
  }

  async addCharacterIntoMovie({ characterId, movieId, duration }) {
    const result = await MovieCharactersModel.create({
      characterId,
      movieId,
      duration,
    });

    return result;
  }

  async update(character, id) {
    await CharactersModel.update(character, { where: { id } });
  }
}
