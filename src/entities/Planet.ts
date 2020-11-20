import IPlanet from "@/interfaces/Planet.interface";

export default class Planet implements IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;

  /* -------------------- */
  /* ---- CONSTRUCTOR --- */
  /* -------------------- */
  constructor(planet: IPlanet) {
    this.name = planet.name;
    this.rotation_period = planet.rotation_period;
    this.orbital_period = planet.orbital_period;
    this.diameter = planet.diameter;
    this.climate = planet.climate;
    this.gravity = planet.gravity;
    this.terrain = planet.terrain;
    this.surface_water = planet.surface_water;
    this.population = planet.population;
    this.residents = planet.residents;
    this.films = planet.films;
    this.created = planet.created;
    this.edited = planet.edited;
    this.url = planet.url;
  }

  /* ---------------- */
  /* ---- METHODS --- */
  /* ---------------- */
}
