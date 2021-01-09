<template>
  <v-card max-width="1000" class="mx-auto">
    <v-img :src="src" height="300px" dark>
      <v-row class="fill-height">
        <v-card-title>
          <v-btn dark icon class="mr-4">
            <router-link to="/editprofile" class="link">
              <v-icon class="link-item">mdi-pencil</v-icon>
            </router-link>
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
import axios from "axios";

export default {
  data() {
    return {
      name: "Ali Conners",
      src: require("@/assets/ali.png")
      // src: "https://cdn.vuetifyjs.com/images/lists/ali.png"
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/user/")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.link {
  text-decoration: none;
  color: #fff;
  .link-item {
    color: #fff;
  }
}
</style>
