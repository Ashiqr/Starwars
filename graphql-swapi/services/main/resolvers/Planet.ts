import {findMany, findOne} from '../../../packages/swapi';
import {
  QueryPlanetArgs,
  QueryListPlanetsArgs,
  Planet as PlanetType,
  Person as PersonType,
  Film as FilmType,
} from '../types';

const hasMany = ['residents', 'films'];

export class Planet {
  public static listPlanets = (
    _: unknown,
    args: QueryListPlanetsArgs,
  ): Promise<PlanetType[]> =>
    findMany<PlanetType>('planets', {
      page: args.page || 1,
      hasMany,
    });

  public static findOnePlanet = (
    _: unknown,
    args: QueryPlanetArgs,
  ): Promise<PlanetType> =>
    findOne<PlanetType>('planets', {
      id: args.id,
      hasMany,
    });

  public static getPersonPlanet = async (
    person: PersonType,
  ): Promise<PlanetType | null> => {
    if (!person.homeworld_id) {
      return null;
    }

    return await findOne<PlanetType>('planets', {
      id: person.homeworld_id,
      hasMany,
    });
  };

  public static listFilmPlanets = async (
    film: FilmType,
  ): Promise<PlanetType[]> => {
    return await Promise.all(
      film.characters_ids.map((id: string) =>
        findOne<PlanetType>('planets', {id, hasMany}),
      ),
    );
  };
}
