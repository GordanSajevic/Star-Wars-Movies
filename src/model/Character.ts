import Model from "../core/Model";

export interface TCharacter {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface ICharacter extends TCharacter  {}

const Character = Model((model: TCharacter): ICharacter => {
  const _value: TCharacter = Object.assign({}, model);

  let _model = {
    get name() {
      return _value.name;
    },
    set name(value) {
      _value.name = value;
    },
    get height() {
      return _value.height;
    },
    set height(value) {
      _value.height = value;
    },
    get mass() {
      return _value.mass;
    },
    set mass(value) {
      _value.mass = value;
    },
    get hair_color() {
      return _value.hair_color;
    },
    set hair_color(value) {
      _value.hair_color = value;
    },
    get skin_color() {
      return _value.skin_color;
    },
    set skin_color(value) {
      _value.skin_color = value;
    },
    get eye_color() {
      return _value.eye_color;
    },
    set eye_color(value) {
      _value.eye_color = value;
    },
    get birth_year() {
      return _value.birth_year;
    },
    set birth_year(value) {
      _value.birth_year = value;
    },
    get gender() {
      return _value.gender;
    },
    set gender(value) {
      _value.gender = value;
    },
  };

  return _model;
});

export default Character;
