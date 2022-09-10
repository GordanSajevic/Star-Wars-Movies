import Model from "../core/Model";
import { ICharacter } from "./Character";
import { IMovie } from "./Movie";

export interface TPlanet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: number;
}

export interface IPlanet extends TPlanet  {}

const Planet = Model((model: TPlanet): IPlanet => {
  const _value: TPlanet = Object.assign({}, model);

  let _model = {
    get name() {
      return _value.name;
    },
    set name(value) {
      _value.name = value;
    },
    get rotation_period() {
      return _value.rotation_period;
    },
    set rotation_period(value) {
      _value.rotation_period = value;
    },
    get orbital_period() {
      return _value.orbital_period;
    },
    set orbital_period(value) {
      _value.orbital_period = value;
    },
    get diameter() {
      return _value.diameter;
    },
    set diameter(value) {
      _value.diameter = value;
    },
    get climate() {
      return _value.climate;
    },
    set climate(value) {
      _value.climate = value;
    },
    get gravity() {
      return _value.gravity;
    },
    set gravity(value) {
      _value.gravity = value;
    },
    get terrain() {
      return _value.terrain;
    },
    set terrain(value) {
      _value.terrain = value;
    },
    get population() {
      return _value.population;
    },
    set population(value) {
      _value.population = value;
    },
    get surface_water() {
      return _value.surface_water;
    },
    set surface_water(value) {
      _value.surface_water = value;
    },
  };

  return _model;
});

export default Planet;
