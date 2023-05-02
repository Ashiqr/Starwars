import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Film = {
  __typename?: 'Film';
  characters: Array<Person>;
  characters_ids: Array<Scalars['ID']>;
  director: Scalars['String'];
  episode_id: Scalars['Int'];
  id: Scalars['ID'];
  opening_crawl: Scalars['String'];
  planets: Array<Planet>;
  planets_ids: Array<Scalars['ID']>;
  producer?: Maybe<Scalars['String']>;
  release_date: Scalars['String'];
  species: Array<Species>;
  species_ids: Array<Scalars['ID']>;
  starships: Array<Starship>;
  starships_ids: Array<Scalars['ID']>;
  title: Scalars['String'];
  vehicles: Array<Vehicle>;
  vehicles_ids: Array<Scalars['ID']>;
};

export type PeopleDetails = {
  __typename?: 'PeopleDetails';
  count: Scalars['Int'];
  people: Array<Person>;
};

export type Person = {
  __typename?: 'Person';
  birth_year?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  films: Array<Film>;
  films_ids: Array<Scalars['ID']>;
  gender?: Maybe<Scalars['String']>;
  hair_color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  homeworld?: Maybe<Planet>;
  homeworld_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  mass?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  skin_color?: Maybe<Scalars['String']>;
  species: Array<Species>;
  species_ids: Array<Scalars['ID']>;
  starships: Array<Starship>;
  starships_ids: Array<Scalars['ID']>;
  vehicles: Array<Vehicle>;
  vehicles_ids: Array<Scalars['ID']>;
};

export type Planet = {
  __typename?: 'Planet';
  climate?: Maybe<Scalars['String']>;
  diameter?: Maybe<Scalars['String']>;
  films: Array<Film>;
  films_ids: Array<Scalars['ID']>;
  gravity?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  orbital_period?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['String']>;
  residents: Array<Person>;
  residents_ids: Array<Scalars['ID']>;
  rotation_period?: Maybe<Scalars['String']>;
  surface_water?: Maybe<Scalars['String']>;
  terrain?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  film?: Maybe<Film>;
  listFilms: Array<Film>;
  listPeople: Array<Person>;
  listPeopleDetails: PeopleDetails;
  listPlanets: Array<Planet>;
  listSpecies: Array<Species>;
  listStarships: Array<Starship>;
  listVehicles: Array<Vehicle>;
  person?: Maybe<Person>;
  planet?: Maybe<Planet>;
  searchPeople: PeopleDetails;
  species?: Maybe<Species>;
  starship?: Maybe<Starship>;
  vehicle?: Maybe<Vehicle>;
};


export type QueryFilmArgs = {
  id: Scalars['ID'];
};


export type QueryListFilmsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListPeopleArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListPeopleDetailsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListPlanetsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListSpeciesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListStarshipsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryListVehiclesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryPersonArgs = {
  id: Scalars['ID'];
};


export type QueryPlanetArgs = {
  id: Scalars['ID'];
};


export type QuerySearchPeopleArgs = {
  name: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySpeciesArgs = {
  id: Scalars['ID'];
};


export type QueryStarshipArgs = {
  id: Scalars['ID'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID'];
};

export type Species = {
  __typename?: 'Species';
  average_height?: Maybe<Scalars['String']>;
  average_lifespan?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  eye_colors?: Maybe<Scalars['String']>;
  films: Array<Film>;
  films_ids: Array<Scalars['ID']>;
  hair_colors?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  language?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  people: Array<Person>;
  people_ids: Array<Scalars['ID']>;
  skin_colors?: Maybe<Scalars['String']>;
};

export type Starship = {
  __typename?: 'Starship';
  MGLT?: Maybe<Scalars['String']>;
  cargo_capacity?: Maybe<Scalars['String']>;
  consumables?: Maybe<Scalars['String']>;
  cost_in_credits?: Maybe<Scalars['String']>;
  crew?: Maybe<Scalars['String']>;
  films: Array<Film>;
  films_ids: Array<Scalars['ID']>;
  hyperdrive_rating?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  length?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  max_atmosphering_speed?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  passengers?: Maybe<Scalars['String']>;
  pilots: Array<Person>;
  pilots_ids: Array<Scalars['ID']>;
  starship_class?: Maybe<Scalars['String']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  cargo_capacity?: Maybe<Scalars['String']>;
  consumables?: Maybe<Scalars['String']>;
  cost_in_credits?: Maybe<Scalars['String']>;
  crew?: Maybe<Scalars['String']>;
  films: Array<Film>;
  films_ids: Array<Scalars['ID']>;
  id: Scalars['ID'];
  length?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<Scalars['String']>;
  max_atmosphering_speed?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  passengers?: Maybe<Scalars['String']>;
  pilots: Array<Person>;
  pilots_ids: Array<Scalars['ID']>;
  vehicle_class?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Film: ResolverTypeWrapper<Film>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PeopleDetails: ResolverTypeWrapper<PeopleDetails>;
  Person: ResolverTypeWrapper<Person>;
  Planet: ResolverTypeWrapper<Planet>;
  Query: ResolverTypeWrapper<{}>;
  Species: ResolverTypeWrapper<Species>;
  Starship: ResolverTypeWrapper<Starship>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Film: Film;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  PeopleDetails: PeopleDetails;
  Person: Person;
  Planet: Planet;
  Query: {};
  Species: Species;
  Starship: Starship;
  String: Scalars['String'];
  Vehicle: Vehicle;
};

export type FilmResolvers<ContextType = any, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  characters?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  characters_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  episode_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  opening_crawl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  planets?: Resolver<Array<ResolversTypes['Planet']>, ParentType, ContextType>;
  planets_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  producer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<Array<ResolversTypes['Species']>, ParentType, ContextType>;
  species_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  starships?: Resolver<Array<ResolversTypes['Starship']>, ParentType, ContextType>;
  starships_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Array<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  vehicles_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PeopleDetails'] = ResolversParentTypes['PeopleDetails']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  birth_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eye_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  films_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hair_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  homeworld?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType>;
  homeworld_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skin_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  species?: Resolver<Array<ResolversTypes['Species']>, ParentType, ContextType>;
  species_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  starships?: Resolver<Array<ResolversTypes['Starship']>, ParentType, ContextType>;
  starships_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  vehicles?: Resolver<Array<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  vehicles_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Planet'] = ResolversParentTypes['Planet']> = {
  climate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  films_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  gravity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orbital_period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residents?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  residents_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  rotation_period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surface_water?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  terrain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  film?: Resolver<Maybe<ResolversTypes['Film']>, ParentType, ContextType, RequireFields<QueryFilmArgs, 'id'>>;
  listFilms?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType, Partial<QueryListFilmsArgs>>;
  listPeople?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType, Partial<QueryListPeopleArgs>>;
  listPeopleDetails?: Resolver<ResolversTypes['PeopleDetails'], ParentType, ContextType, Partial<QueryListPeopleDetailsArgs>>;
  listPlanets?: Resolver<Array<ResolversTypes['Planet']>, ParentType, ContextType, Partial<QueryListPlanetsArgs>>;
  listSpecies?: Resolver<Array<ResolversTypes['Species']>, ParentType, ContextType, Partial<QueryListSpeciesArgs>>;
  listStarships?: Resolver<Array<ResolversTypes['Starship']>, ParentType, ContextType, Partial<QueryListStarshipsArgs>>;
  listVehicles?: Resolver<Array<ResolversTypes['Vehicle']>, ParentType, ContextType, Partial<QueryListVehiclesArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'id'>>;
  planet?: Resolver<Maybe<ResolversTypes['Planet']>, ParentType, ContextType, RequireFields<QueryPlanetArgs, 'id'>>;
  searchPeople?: Resolver<ResolversTypes['PeopleDetails'], ParentType, ContextType, RequireFields<QuerySearchPeopleArgs, 'name'>>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<QuerySpeciesArgs, 'id'>>;
  starship?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType, RequireFields<QueryStarshipArgs, 'id'>>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, RequireFields<QueryVehicleArgs, 'id'>>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  average_height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  average_lifespan?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  classification?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eye_colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  films_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  hair_colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  people_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  skin_colors?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship']> = {
  MGLT?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cargo_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost_in_credits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  films_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  hyperdrive_rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max_atmosphering_speed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilots?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  pilots_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  starship_class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  cargo_capacity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  consumables?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost_in_credits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  crew?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['Film']>, ParentType, ContextType>;
  films_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max_atmosphering_speed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passengers?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pilots?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  pilots_ids?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  vehicle_class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Film?: FilmResolvers<ContextType>;
  PeopleDetails?: PeopleDetailsResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  Starship?: StarshipResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};

