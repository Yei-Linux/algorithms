import { CharactersModel } from '../models/Characters.model.js';
import { MoviesModel } from '../models/Movies.model.js';

export class MovieService {
  async getMovieWithCharacters(movieId) {
    const movieWithCharacters = await MoviesModel.findOne({
      where: { id: movieId },
      include: {
        model: CharactersModel,
        attributes: ['id', 'image', 'name'],
        through: {
          attributes: ['id', 'duration'],
        },
      },
    });

    return movieWithCharacters;
  }

  async create(movie) {
    const result = await MoviesModel.create(movie);
    return result;
  }
}
