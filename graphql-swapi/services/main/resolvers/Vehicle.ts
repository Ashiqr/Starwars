import {findMany, findOne} from '../../../packages/swapi';
import {
  QueryVehicleArgs,
  QueryListVehiclesArgs,
  Person as PersonType,
  Film as FilmType,
  Vehicle as VehicleType,
} from '../types';

const hasMany = ['films', 'pilots'];

export class Vehicle {
  public static listVehicles = (
    _: unknown,
    args: QueryListVehiclesArgs,
  ): Promise<VehicleType[]> =>
    findMany<VehicleType>('vehicles', {
      page: args.page || 1,
      hasMany,
    });

  public static findOneVehicle = (
    _: unknown,
    args: QueryVehicleArgs,
  ): Promise<VehicleType> =>
    findOne<VehicleType>('vehicles', {
      id: args.id,
      hasMany,
    });

  public static listFilmVehicles = async (
    film: FilmType,
  ): Promise<VehicleType[]> => {
    return await Promise.all(
      film.vehicles_ids.map((id: string) =>
        findOne<VehicleType>('vehicles', {id, hasMany}),
      ),
    );
  };

  public static listPersonVehicles = async (
    person: PersonType,
  ): Promise<VehicleType[]> => {
    return await Promise.all(
      person.vehicles_ids.map((id: string) =>
        findOne<VehicleType>('vehicles', {id, hasMany}),
      ),
    );
  };
}
