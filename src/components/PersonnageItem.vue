<template>
  <v-card class="mx-auto card-outter" max-width="400" height="400px">
    <v-list-item>
      <v-list-item-title>{{ personnage.name }}</v-list-item-title>
      <v-list-item-subtitle
        >{{ personnage.height }}cm -
        {{ personnage.gender }}</v-list-item-subtitle
      >
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Personnage from "@/entities/Personnage";

export default Vue.extend({
  name: "PeronnageItem",
  props: {
    personnage: {
      type: Personnage,
    },
  },
});
</script>

<style scoped>
</style>