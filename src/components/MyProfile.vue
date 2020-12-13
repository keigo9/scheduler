<template>
  <v-card max-width="1000" class="mx-auto">
    <v-img :src="src" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon class="mr-4">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn dark icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
            {{ name }}
          </div>
        </v-card-title>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "Ali Conners",
      src: require("@/assets/ali.png")
      // src: "https://cdn.vuetifyjs.com/images/lists/ali.png"
    };
  }
};
</script>
