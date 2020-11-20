import IPersonnage from "@/interfaces/Personnage.interface";

export default class Personnage implements IPersonnage {
  name: string;
  height: string;
  gender: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;

  /* -------------------- */
  /* ---- CONSTRUCTOR --- */
  /* -------------------- */
  constructor(personnage: IPersonnage) {
    this.name = personnage.name;
    this.height = personnage.height;
    this.gender = personnage.gender;
    this.mass = personnage.mass;
    this.hair_color = personnage.hair_color;
    this.skin_color = personnage.skin_color;
    this.eye_color = personnage.eye_color;
    this.birth_year = personnage.birth_year;
    this.homeworld = personnage.homeworld;
    this.films = personnage.films;
    this.species = personnage.species;
    this.vehicles = personnage.vehicles;
    this.starships = personnage.starships;
    this.created = personnage.created;
    this.edited = personnage.edited;
    this.url = personnage.url;
  }

  /* ---------------- */
  /* ---- METHODS --- */
  /* ---------------- */
}
