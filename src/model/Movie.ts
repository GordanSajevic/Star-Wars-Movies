import Model from "../core/Model";
import { ICharacter } from "./Character";
import { IPlanet } from "./Planet";
import { IStarship } from "./Starship";
import RomanNumberService, { IRomanNumberService } from "./../service/RomanNumberService";
import { IVehicle } from "./Vehicle";
import { ISpecie } from "./Specie";

const romanNumberService: IRomanNumberService = RomanNumberService();

export interface TMovie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  characterData: ICharacter[];
  planets: string[];
  planetData: IPlanet[];
  starships: string[];
  starshipData: IStarship[];
  vehicles: string[];
  vehicleData: IVehicle[];
  species: string[];
  specieData: ISpecie[];
}

export interface IMovie extends TMovie  {}

const Movie = Model((model: TMovie): IMovie => {
  const _value: TMovie = Object.assign({}, model);

  let _model = {
    get title() {
      return `Episode ${romanNumberService.getRomanNumber(_value.episode_id)} - ${_value.title}`;
    },
    set title(value) {
      _value.title = value;
    },
    get episode_id() {
      return _value.episode_id;
    },
    set episode_id(value) {
      _value.episode_id = value;
    },
    get opening_crawl() {
      return _value.opening_crawl;
    },
    set opening_crawl(value) {
      _value.opening_crawl = value;
    },
    get director() {
      return _value.director;
    },
    set director(value) {
      _value.director = value;
    },
    get producer() {
      return _value.producer;
    },
    set producer(value) {
      _value.producer = value;
    },
    get release_date() {
      return _value.release_date;
    },
    set release_date(value) {
      _value.release_date = value;
    },
    get characters() {
      return _value.characters;
    },
    set characters(value) {
      _value.characters = value;
    },
    get characterData() {
      return _value.characterData;
    },
    set characterData(value) {
      _value.characterData = value;
    },
    get planets() {
      return _value.planets;
    },
    set planets(value) {
      _value.planets = value;
    },
    set planetData(value) {
      _value.planetData = value;
    },
    get planetData() {
      return _value.planetData;
    },
    get starships() {
      return _value.starships;
    },
    set starships(value) {
      _value.starships = value;
    },
    get starshipData() {
      return _value.starshipData;
    },
    set starshipData(value) {
      _value.starshipData = value;
    },
    get vehicles() {
      return _value.vehicles;
    },
    set vehicles(value) {
      _value.vehicles = value;
    },
    get vehicleData() {
      return _value.vehicleData;
    },
    set vehicleData(value) {
      _value.vehicleData = value;
    },
    get species() {
      return _value.species;
    },
    set species(value) {
      _value.species = value;
    },
    get specieData() {
      return _value.specieData;
    },
    set specieData(value) {
      _value.specieData = value;
    },
  };

  return _model;
});

export default Movie;
