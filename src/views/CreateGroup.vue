<template>
  <v-container>
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
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ProfileImagePreviewComponent",

  data() {
    return {
      input_image: null,
      uploadImageUrl: "",
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
    //submit methods
    validate() {
      this.$refs.form.validate();
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
