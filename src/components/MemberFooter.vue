<template>
  <v-footer color="blue" padless>
    <v-row class="flex" justify="center">
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
