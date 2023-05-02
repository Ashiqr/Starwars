import {findMany, findOne} from '../../../packages/swapi';
import {
  QueryStarshipArgs,
  QueryListStarshipsArgs,
  Person as PersonType,
  Film as FilmType,
  Starship as StarshipType,
} from '../types';

const hasMany = ['films', 'pilots'];

export class Starship {
  public static listStarships = (
    _: unknown,
    args: QueryListStarshipsArgs,
  ): Promise<StarshipType[]> =>
    findMany<StarshipType>('starships', {
      page: args.page || 1,
      hasMany,
    });

  public static findOneStarship = (
    _: unknown,
    args: QueryStarshipArgs,
  ): Promise<StarshipType> =>
    findOne<StarshipType>('starships', {
      id: args.id,
      hasMany,
    });

  public static listFilmStarships = async (
    film: FilmType,
  ): Promise<StarshipType[]> => {
    return await Promise.all(
      film.starships_ids.map((id: string) =>
        findOne<StarshipType>('starships', {id, hasMany}),
      ),
    );
  };

  public static listPersonStarships = async (
    person: PersonType,
  ): Promise<StarshipType[]> => {
    return await Promise.all(
      person.starships_ids.map((id: string) =>
        findOne<StarshipType>('starships', {id, hasMany}),
      ),
    );
  };
}
