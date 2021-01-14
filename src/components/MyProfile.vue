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

        <v-card-title class="white--text">
          <v-list-item-title class="display-1 pt-16">
            {{ name }}
          </v-list-item-title>
          <v-list-item-title class="display-0 pt-0">
            {{ email }}
          </v-list-item-title>
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
      name: "",
      email: "",
      src: require("@/assets/ali.png")
      // src: "https://cdn.vuetifyjs.com/images/lists/ali.png"
    };
  },
  created() {
    axios
      .get("/user/")
      .then(response => {
        this.name = response.data[0].username;
        this.email = response.data[0].email;
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
