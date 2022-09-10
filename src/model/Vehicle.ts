import Model from "../core/Model";
import { ICharacter } from "./Character";
import { IMovie } from "./Movie";

export interface TVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  vehicle_class: string;
}

export interface IVehicle extends TVehicle  {}

const Vehicle = Model((model: TVehicle): IVehicle => {
  const _value: TVehicle = Object.assign({}, model);

  let _model = {
    get name() {
      return _value.name;
    },
    set name(value) {
      _value.name = value;
    },
    get model() {
      return _value.model;
    },
    set model(value) {
      _value.model = value;
    },
    get manufacturer() {
      return _value.manufacturer;
    },
    set manufacturer(value) {
      _value.manufacturer = value;
    },
    get cost_in_credits() {
      return _value.cost_in_credits;
    },
    set cost_in_credits(value) {
      _value.cost_in_credits = value;
    },
    get length() {
      return _value.length;
    },
    set length(value) {
      _value.length = value;
    },
    get max_atmosphering_speed() {
      return _value.max_atmosphering_speed;
    },
    set max_atmosphering_speed(value) {
      _value.max_atmosphering_speed = value;
    },
    get crew() {
      return _value.crew;
    },
    set crew(value) {
      _value.crew = value;
    },
    get passengers() {
      return _value.passengers;
    },
    set passengers(value) {
      _value.passengers = value;
    },
    get cargo_capacity() {
      return _value.cargo_capacity;
    },
    set cargo_capacity(value) {
      _value.cargo_capacity = value;
    },
    get consumables() {
      return _value.consumables;
    },
    set consumables(value) {
      _value.consumables = value;
    },
    get vehicle_class() {
      return _value.vehicle_class;
    },
    set vehicle_class(value) {
      _value.vehicle_class = value;
    },
  };

  return _model;
});

export default Vehicle;
