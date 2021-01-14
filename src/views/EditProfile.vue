<template>
  <v-container>
    <h1>Edit Profile</h1>
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
      <!-- NameTextfailed -->
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="ProfileName"
        required
      ></v-text-field>
      <!-- EmailTextfailed -->
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      <!-- submit btn -->
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="update()">
        SETTING
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
      emailRules: [
        value => !!value || "Required.",
        value => (value || "").length <= 20 || "Max 20 characters",
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      ],
      email: "",
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
    //update methods
    update() {
      axios
        .put("/user/1", {
          username: this.name,
          email: this.email
        })
        .then(response => {
          console.log(response);
          this.$router.push("/group");
        })
        .catch(error => {
          console.log(error);
        });
    },
    //this fromを検証
    validate() {
      this.$refs.form.validate();
    }
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
.container {
  max-width: 1000px;
  width: 500px;
}
img {
  height: 200px;
  width: 200px;
}
</style>
