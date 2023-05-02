import {findMany, findOne} from '../../../packages/swapi';
import {
  QueryFilmArgs,
  QueryListFilmsArgs,
  Planet as PlanetType,
  Person as PersonType,
  Film as FilmType,
  Species as SpeciesType,
  Vehicle as VehicleType,
  Starship as StarshipType,
} from '../types';

const hasMany = ['characters', 'planets', 'starships', 'vehicles', 'species'];

export class Film {
  public static listFilms = (
    _: unknown,
    args: QueryListFilmsArgs,
  ): Promise<FilmType[]> =>
    findMany<FilmType>('films', {
      page: args.page || 1,
      hasMany,
    });

  public static findOneFilm = (
    _: unknown,
    args: QueryFilmArgs,
  ): Promise<FilmType> =>
    findOne<FilmType>('films', {
      id: args.id,
      hasMany,
    });

  public static listPlanetFilms = async (
    planet: PlanetType,
  ): Promise<FilmType[]> => {
    return await Promise.all(
      planet.films_ids.map((id: string) =>
        findOne<FilmType>('films', {id, hasMany}),
      ),
    );
  };

  public static listPersonFilms = async (
    person: PersonType,
  ): Promise<FilmType[]> => {
    return await Promise.all(
      person.films_ids.map((id: string) =>
        findOne<FilmType>('films', {id, hasMany}),
      ),
    );
  };

  public static listSpeciesFilms = async (
    species: SpeciesType,
  ): Promise<FilmType[]> => {
    return await Promise.all(
      species.films_ids.map((id: string) =>
        findOne<FilmType>('films', {id, hasMany}),
      ),
    );
  };

  public static listVehicleFilms = async (
    vehicle: VehicleType,
  ): Promise<FilmType[]> => {
    return await Promise.all(
      vehicle.films_ids.map((id: string) =>
        findOne<FilmType>('films', {id, hasMany}),
      ),
    );
  };

  public static listStarshipFilms = async (
    starship: StarshipType,
  ): Promise<FilmType[]> => {
    return await Promise.all(
      starship.films_ids.map((id: string) =>
        findOne<FilmType>('films', {id, hasMany}),
      ),
    );
  };
}
