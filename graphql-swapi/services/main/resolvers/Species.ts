import {findMany, findOne} from '../../../packages/swapi';
import {
  QuerySpeciesArgs,
  QueryListSpeciesArgs,
  Species as SpeciesType,
  Person as PersonType,
  Film as FilmType,
} from '../types';

const hasMany = ['people', 'films'];

export class Species {
  public static listSpecies = (
    _: unknown,
    args: QueryListSpeciesArgs,
  ): Promise<SpeciesType[]> =>
    findMany<SpeciesType>('species', {
      page: args.page || 1,
      hasMany,
    });

  public static findOneSpecies = (
    _: unknown,
    args: QuerySpeciesArgs,
  ): Promise<SpeciesType> =>
    findOne<SpeciesType>('species', {
      id: args.id,
      hasMany,
    });

  public static listPeopleSpecies = async (
    person: PersonType,
  ): Promise<SpeciesType[]> => {
    return await Promise.all(
      person.species_ids.map((id: string) =>
        findOne<SpeciesType>('species', {id, hasMany}),
      ),
    );
  };

  public static listFilmSpecies = async (
    film: FilmType,
  ): Promise<SpeciesType[]> => {
    return await Promise.all(
      film.species_ids.map((id: string) =>
        findOne<SpeciesType>('species', {id, hasMany}),
      ),
    );
  };
}
