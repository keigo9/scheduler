<template>
  <v-container>
    <h1>Create Group</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <!-- upload image -->
      <v-file-input
        v-model="input_image"
        accept="image/*"
        show-size
        label="Avatar"
        prepend-icon="mdi-image"
        @change="onImagePicked"
      ></v-file-input>
      <!-- image preview -->
      <img v-if="uploadImageUrl" :src="uploadImageUrl" />
      <!-- textfailed -->
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="GroupName"
        required
      ></v-text-field>
      <!-- submit btn -->
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="add()">
        Validate
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileImagePreviewComponent",
  data() {
    return {
      input_image: null,
      uploadImageUrl: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      name: "",
      valid: true
    };
  },
  methods: {
    //preview image
    onImagePicked(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
          this.uploadImageUrl = fr.result;
        });
      } else {
        this.uploadImageUrl = "";
      }
    },
    //send DB methods
    add() {
      axios
        .post("/group/", {
          owner: 1,
          title: this.name
        })
        .then(response => {
          console.log(response);
          this.$emit("isCreate");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  width: 500px;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>
