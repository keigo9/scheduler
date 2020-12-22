<template>
  <div class="nav-bar">
    <v-toolbar color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Inbox</v-toolbar-title>

      <router-link to="/" class="link">HOME</router-link> |
      <router-link to="/login" class="link">Login</router-link> |
      <router-link to="/group" class="link">Group</router-link>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<style scoped>
.link {
  color: #fff;
  margin: 0px 5px;
}
</style>
