<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="display-1 font-weight-bold mb-3">Create Account</h1>
          <p>すでに登録済みの人はログインしてください</p>
          <router-link to="/"><p>*ログイン</p></router-link>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined elevation="4">
            <v-card-text>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="名前"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                :rules="passwdRules"
                label="パスワード"
              ></v-text-field>
              <v-text-field
                v-model="password_confirmation"
                type="password"
                :rules="passwdRules"
                label="パスワードを再入力"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="post" block class="mb-2" color="primary">
                新規登録
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      v => !!v || "必須項目",
      v => /.+@.+/.test(v) || "有効なアドレスを入力してください",
    ],
    password: "",
    password_confirmation: "",
    passwdRules: [(v) => !!v || "必須項目"],
  }),
  methods: {
    post() {
      let data = {
        username: this.name,
        email: this.email,
        password1: this.password,
        password2: this.password_confirmation,
      };
      axios.post("rest-auth/registration/", data);
    }
  }
};
</script>
