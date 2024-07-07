import { CharactersModel } from '../models/Characters.model.js';
import { GendersModel } from '../models/Genders.model.js';
import { MoviesModel } from '../models/Movies.model.js';

export const seedData = async () => {
  try {
    await GendersModel.bulkCreate([
      {
        id: 1,
        name: 'Horror',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2023-10/25/21/enhanced/6663804d59e8/original-1637-1698268655-2.png',
      },
      {
        id: 2,
        name: 'Romantic',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2023-10/25/21/enhanced/6663804d59e8/original-1637-1698268655-2.png',
      },
      {
        id: 3,
        name: 'Action',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2023-10/25/21/enhanced/6663804d59e8/original-1637-1698268655-2.png',
      },
    ]);

    await MoviesModel.bulkCreate([
      {
        id: 1,
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2023-10/25/21/enhanced/6663804d59e8/original-1637-1698268655-2.png',
        title: 'Terrifier',
        dateCreated: new Date(),
        rating: 8,
        genderId: 1,
      },
    ]);

    await CharactersModel.bulkCreate([
      {
        id: 1,
        name: 'Terrifier clown',
        image:
          'https://img.buzzfeed.com/buzzfeed-static/static/2023-10/25/21/enhanced/6663804d59e8/original-1637-1698268655-2.png',
        age: 40,
        weight: 80,
        history: 'A clown that wants to kill people',
      },
    ]);
  } catch (error) {
    console.log('Data was inserted');
  }
};
