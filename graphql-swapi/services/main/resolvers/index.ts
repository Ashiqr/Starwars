import {Person} from './Person';
import {Planet} from './Planet';
import {Species} from './Species';
import {Film} from './Film';
import {Starship} from './Starship';
import {Vehicle} from './Vehicle';

export const resolvers = {
  Species: {
    people: Person.listSpeciesPeople,
    films: Film.listSpeciesFilms,
  },
  Person: {
    species: Species.listPeopleSpecies,
    homeworld: Planet.getPersonPlanet,
    films: Film.listPersonFilms,
    starships: Starship.listPersonStarships,
    vehicles: Vehicle.listPersonVehicles,
  },
  Planet: {
    residents: Person.listPlanetPeople,
    films: Film.listPlanetFilms,
  },
  Starship: {
    films: Film.listStarshipFilms,
    pilots: Person.listStarshipPeople,
  },
  Vehicle: {
    films: Film.listVehicleFilms,
    pilots: Person.listVehiclePeople,
  },
  Film: {
    characters: Person.listFilmPeople,
    planets: Planet.listFilmPlanets,
    species: Species.listFilmSpecies,
    starships: Starship.listFilmStarships,
    vehicles: Vehicle.listFilmVehicles,
  },
  Query: {
    listPeople: Person.listPeople,
    listPeopleDetails: Person.listPeopleDetails,
    person: Person.findOnePerson,
    searchPeople: Person.searchPeople,
    listPlanets: Planet.listPlanets,
    planet: Planet.findOnePlanet,
    listSpecies: Species.listSpecies,
    species: Species.findOneSpecies,
    listFilms: Film.listFilms,
    film: Film.findOneFilm,
    starship: Starship.findOneStarship,
    listStarships: Starship.listStarships,
    vehicle: Vehicle.findOneVehicle,
    listVehicles: Vehicle.listVehicles,
  },
};
