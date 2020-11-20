<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h1>Superheroes</h1>
    </div>

    <v-spacer></v-spacer>
    <v-btn icon color="white" :to="{ name: 'Home' }">
      <v-icon>mdi-face</v-icon>
    </v-btn>
    <v-btn icon color="white" :to="{ name: 'Planets' }">
      <v-icon>mdi-earth</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
</style>