import fetch from 'node-fetch';
import { PeopleDetails } from '../../services/main/types';

const SWAPI_URL = 'https://swapi.dev/api';

export const swapi = (query: string) => {
  return fetch(`${SWAPI_URL}/${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

const getMany = (data: any, hasMany: string[]) => {
  const hasManyIds = (hasMany || []).reduce((prev, key) => {
    return {
      ...prev,
      [`${key}_ids`]: data[key].map((item: any) => {
        return item.slice(0, -1).split('/').pop();
      }),
    };
  }, {});

  return hasManyIds;
};

const getOne = (data: any, hasOne: string[]) => {
  const hasManyIds = (hasOne || []).reduce((prev, key) => {
    return {
      ...prev,
      [`${key}_id`]: data[key].slice(0, -1).split('/').pop(),
    };
  }, {});

  return hasManyIds;
};

interface IFindOne {
  id: string;
  hasMany?: string[];
  hasOne?: string[];
}

export const findOne = async <T>(
  entity: string,
  {id, hasMany, hasOne}: IFindOne,
): Promise<T> => {
  const data = await swapi(`${entity}/${id}`);

  return {
    ...data,
    id,
    ...getMany(data, hasMany || []),
    ...getOne(data, hasOne || []),
  };
};

export const findManyDetails = async <T>(
  entity: string,
  {page, hasMany, hasOne}: IFindMany,
): Promise<PeopleDetails> => {
  const data = await swapi(`${entity}/${page ? `?page=${page}` : ''}`);
  
  const people = data.results.map((item: any, index: number) => ({
    ...item,
    id: `${(page || 1) * 10 - 10 + index + 1}`,
    ...getMany(item, hasMany || []),
    ...getOne(item, hasOne || []),
  }));
  const result: PeopleDetails =  {people, count : data.count};
  return result;
};

interface IFindMany {
  page?: number;
  search?: string;
  hasMany?: string[];
  hasOne?: string[];
}

export const findMany = async <T>(
  entity: string,
  {page, hasMany, hasOne}: IFindMany,
): Promise<T[]> => {
  const data = await swapi(`${entity}/${page ? `?page=${page}` : ''}`);

  return data.results.map((item: any, index: number) => ({
    ...item,
    id: `${(page || 1) * 10 - 10 + index + 1}`,
    ...getMany(item, hasMany || []),
    ...getOne(item, hasOne || []),
  }));
};



export const search = async <T>(
  entity: string,
  {page, search, hasMany, hasOne}: IFindMany,
): Promise<PeopleDetails> => {
  const data = await swapi(`${entity}/${page ? `?page=${page}` : '?page=1'}&search=${search}`);

  const people = data.results.map((item: any, index: number) => ({
    ...item,
    id: `${(page || 1) * 10 - 10 + index + 1}`,
    ...getMany(item, hasMany || []),
    ...getOne(item, hasOne || []),
  }));
  const result: PeopleDetails =  {people, count : data.count};
  return result;
};