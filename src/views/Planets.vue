<template>
  <div>
    <h1>Liste des planètes</h1>
    <v-row>
      <v-col v-for="(planet, index) in getPlanets()" :key="index" sm="4">
        <PlanetItem v-bind:planet="planet" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Planet from "@/entities/Planet";
import IPlanet from "@/interfaces/Planet.interface";
import { Component, Vue } from "vue-property-decorator";
import PlanetItem from "@/components/PlanetItem.vue";

@Component({
  components: {
    PlanetItem,
  },
})
export default class extends Vue {
  planets = [] as Array<IPlanet>;

  async created() {
    const fetchPlanets = await fetch(process.env.VUE_APP_API_URL_PLANETS, {
      method: "GET",
    });
    const planetsData = await fetchPlanets.json();

    this.planets = planetsData.results.map((item: IPlanet) => new Planet(item));
    console.log(this.planets);
  }

  constructor() {
    super();
  }

  getPlanets() {
    return this.planets;
  }
}
</script>

<style scoped>
</style>