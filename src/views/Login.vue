<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="display-1 font-weight-bold mb-3">Login</h1>
          <p>未登録の方はアカウントを作成してください</p>
          <router-link to="createaccount"><p>*新規登録</p></router-link>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined elevation="4">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="メールアドレス"
              ></v-text-field>
              <v-text-field
                v-model="passwd"
                type="password"
                :rules="passwdRules"
                label="パスワード"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn block class="mb-2" color="primary">
                ログイン
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "必須項目",
      v => /.+@.+/.test(v) || "有効なアドレスを入力してください"
    ],
    passwd: "",
    passwdRules: [v => !!v || "必須項目"]
  })
};
</script>
