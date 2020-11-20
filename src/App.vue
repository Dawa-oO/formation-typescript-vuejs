<template>
  <v-app>
    <Menu />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Menu from "@/components/Menu.vue";

export default Vue.extend({
  name: "App",

  components: { Menu },

  data: () => ({
    //
  }),
});
</script>
