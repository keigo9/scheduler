<template>
  <v-card max-width="1000" class="mx-auto">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon @click="isStar(item)">
          <v-icon :color="item.color">
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-icon class="icon-num">
          <router-link :to="'/groupmember/' + item.title" class="link">
            <v-icon class="link-item">
              mdi-tag-outline
            </v-icon>
            (13)
          </router-link>
        </v-list-item-icon>

        <v-list-item-icon>
          <router-link to="/calender" class="link">
            <v-icon class="link-item">
              mdi-calendar-multiple
            </v-icon>
          </router-link>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link to="/calender" class="link">
            <v-list-item-title
              v-text="item.title"
              class="link-item"
            ></v-list-item-title>
          </router-link>
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

<style scoped lang="scss">
.icon-num {
  margin-right: 10px;
  background-color: rgb(131, 131, 131, 0.3);
  border-radius: 50px;
}
.link {
  text-decoration: none;
  color: rgb(63, 63, 63);
  .link-item {
    color: rgb(63, 63, 63);
  }
}
</style>
