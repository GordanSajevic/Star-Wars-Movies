import Model from "../core/Model";
import { ICharacter } from "./Character";
import { IMovie } from "./Movie";
import { IPlanet } from "./Planet";

export interface TSpecie {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  average_lifespan: number;
  skin_colors: string[];
  hair_colors: string[];
  eye_colors: string[];
  language: string;
}

export interface ISpecie extends TSpecie  {}

const Specie = Model((model: TSpecie): ISpecie => {
  const _value: TSpecie = Object.assign({}, model);

  let _model = {
    get name() {
      return _value.name;
    },
    set name(value) {
      _value.name = value;
    },
    get classification() {
      return _value.classification;
    },
    set classification(value) {
      _value.classification = value;
    },
    get designation() {
      return _value.designation;
    },
    set designation(value) {
      _value.designation = value;
    },
    get average_height() {
      return _value.average_height;
    },
    set average_height(value) {
      _value.average_height = value;
    },
    get average_lifespan() {
      return _value.average_lifespan;
    },
    set average_lifespan(value) {
      _value.average_lifespan = value;
    },
    get skin_colors() {
      return _value.skin_colors;
    },
    set skin_colors(value) {
      _value.skin_colors = value;
    },
    get hair_colors() {
      return _value.hair_colors;
    },
    set hair_colors(value) {
      _value.hair_colors = value;
    },
    get eye_colors() {
      return _value.eye_colors;
    },
    set eye_colors(value) {
      _value.eye_colors = value;
    },
    get language() {
      return _value.language;
    },
    set language(value) {
      _value.language = value;
    }
  };

  return _model;
});

export default Specie;
