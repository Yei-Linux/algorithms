import { MovieService } from '../services/movie.service.js';

export class MoviesController {
  constructor() {
    this.movieService = new MovieService();
  }

  getMovieWithCharacters = async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const data = await this.movieService.getMovieWithCharacters(movieId);
      res.status(200).send({
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const body = req.body;
      const data = await this.movieService.create(body);
      res.status(201).send({
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
