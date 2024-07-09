import { CharacterService } from '../services/character.service.js';

export class CharactersController {
  constructor() {
    this.characterService = new CharacterService();
  }

  getAll = async (req, res, next) => {
    try {
      const characters = await this.characterService.getAll();
      res.send({
        data: characters,
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await this.characterService.getById(id);
      res.send({ data });
    } catch (error) {
      next(error);
    }
  };

  addCharacterToMovie = async (req, res, next) => {
    try {
      const body = req.body;
      const data = await this.characterService.addCharacterIntoMovie(body);
      res.send({
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const character = req.body;
      const created = await this.characterService.create(character);
      res.send({
        data: created,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const id = req.params.id;
      const character = req.body;
      await this.characterService.update(character, id);
      res.send({
        data: { ...character, id },
      });
    } catch (error) {
      next(error);
    }
  };
}
