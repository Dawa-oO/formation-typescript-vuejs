<template>
  <div>
    <h1>Liste des personnages</h1>
    <v-row>
      <v-col v-for="(personnage, index) in personnages" :key="index" sm="4">
        <PersonnageItem v-bind:personnage="personnage" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IPersonnage from "@/interfaces/Personnage.interface";
import Personnage from "@/entities/Personnage";
import PersonnageItem from "@/components/PersonnageItem.vue";

export default Vue.extend({
  components: {
    PersonnageItem,
  },
  data() {
    return {
      personnages: [] as Array<IPersonnage>,
    };
  },
  async created() {
    const fetchPeople = await fetch(process.env.VUE_APP_API_URL_PEOPLE, {
      method: "GET",
    });
    const personnagesData = await fetchPeople.json();

    this.personnages = personnagesData.results.map(
      (item: IPersonnage) => new Personnage(item)
    );
  },
});
</script>

<style scoped>
</style>