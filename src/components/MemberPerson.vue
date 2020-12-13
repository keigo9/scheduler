<template>
  <v-card max-width="1000" class="mx-auto">
    <!-- <v-toolbar color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon @click="isStar(item)">
          <v-icon :color="item.color">
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-icon>
          <v-icon>
            mdi-calendar-multiple
          </v-icon>
        </v-list-item-icon>

        <v-list-item-icon>
          <v-icon>
            mdi-tag-outline
          </v-icon>
          (13)
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: false,
          color: "gray",
          title: "CPS Lab",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          icon: false,
          color: "gray",
          title: "Travis Howard",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
        },
        {
          icon: false,
          color: "gray",
          title: "Ali Connors",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
        },
        {
          icon: false,
          color: "gray",
          title: "Cindy Baker",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ]
    };
  },
  methods: {
    isStar(item) {
      item.icon = !item.icon;
      if (item.icon) {
        item.color = "pink";
      } else {
        item.color = "gray";
      }
    }
  }
};
</script>
