import {
  Person as PersonType,
  Species as SpeciesType,
  Planet as PlanetType,
  QueryListPeopleArgs,
  QueryPersonArgs,
  Film as FilmType,
  Starship as StarshipType,
  Vehicle as VehicleType,
  QuerySearchPeopleArgs,
  QueryListPeopleDetailsArgs,
  PeopleDetails,
} from '../types';
import {findMany, findManyDetails, findOne, search} from '../../../packages/swapi';

const hasOne = ['homeworld'];
const hasMany = ['species', 'films', 'starships', 'vehicles'];

export class Person {
  public static listPeople = async (
    _: unknown,
    args: QueryListPeopleArgs,
  ): Promise<PersonType[]> =>
    findMany<PersonType>('people', {
      page: args.page || 1,
      hasOne,
      hasMany,
    });

  public static listPeopleDetails = async (
    _: unknown,
    args: QueryListPeopleDetailsArgs,
  ): Promise<PeopleDetails> =>
    findManyDetails<PeopleDetails>('people', {
      page: args.page || 1,
      hasOne,
      hasMany,
    });

  public static findOnePerson = async (_: unknown, args: QueryPersonArgs) =>
    findOne<PersonType>('people', {
      id: args.id,
      hasOne,
      hasMany,
    });

  public static searchPeople = async (_: unknown, args: QuerySearchPeopleArgs) =>
    search<PeopleDetails>('people', {
      search: args.name,
      page: args.page || 1,
      hasOne,
      hasMany,
    });

  public static listSpeciesPeople = async (
    species: SpeciesType,
  ): Promise<PersonType[]> => {
    return await Promise.all(
      species.people_ids.map((id: string) =>
        findOne<PersonType>('people', {id, hasOne, hasMany}),
      ),
    );
  };

  public static listPlanetPeople = async (
    planet: PlanetType,
  ): Promise<PersonType[]> => {
    return await Promise.all(
      planet.residents_ids.map((id: string) =>
        findOne<PersonType>('people', {id, hasOne, hasMany}),
      ),
    );
  };

  public static listFilmPeople = async (
    film: FilmType,
  ): Promise<PersonType[]> => {
    return await Promise.all(
      film.characters_ids.map((id: string) =>
        findOne<PersonType>('people', {id, hasOne, hasMany}),
      ),
    );
  };

  public static listStarshipPeople = async (
    starship: StarshipType,
  ): Promise<PersonType[]> => {
    return await Promise.all(
      starship.pilots_ids.map((id: string) =>
        findOne<PersonType>('people', {id, hasOne, hasMany}),
      ),
    );
  };

  public static listVehiclePeople = async (
    vehicle: VehicleType,
  ): Promise<PersonType[]> => {
    return await Promise.all(
      vehicle.pilots_ids.map((id: string) =>
        findOne<PersonType>('people', {id, hasOne, hasMany}),
      ),
    );
  };
}
