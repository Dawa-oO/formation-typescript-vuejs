<template>
  <v-card class="mx-auto card-outter" max-width="400" height="300px">
    <v-img
      class="white--text align-end cardImage"
      height="200px"
      contain
      src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/1/2/8129590b3c_108529_planete-10.jpg"
    />
    <v-card-title>{{ planet.name }}</v-card-title>

    <v-card-subtitle class="pb-0">
      {{ planet.population }} citizen
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ planet.diameter }} km</div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Planet from "@/entities/Planet";

export default Vue.extend({
  name: "PlanetItem",
  props: {
    planet: {
      type: Planet,
    },
  },
});
</script>

<style scoped></style>
