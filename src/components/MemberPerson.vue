<template>
  <v-card max-width="1000" class="mx-auto">
    <v-row
      align="center"
      justify="space-around"
      class="v-row"
      @click="isEdit()"
    >
      <v-btn tile color="success">
        <v-icon left>
          mdi-pencil
        </v-icon>
        Edit
      </v-btn>
    </v-row>
    <div class="clear"></div>
    <v-list>
      <v-list-item v-for="item in persons" :key="item.message">
        <!-- name -->
        <v-list-item-content>
          <v-list-item-title
            v-text="item.message"
            class="link-item"
          ></v-list-item-title>
        </v-list-item-content>
        <!-- pic -->
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
        <!-- delete btn -->
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          v-if="edit"
          @click="deleted()"
        >
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      edit: false,
      persons: [],
      items: [
        {
          icon: false,
          color: "gray",
          title: "Kennichi",
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
    isEdit() {
      this.edit = !this.edit;
    },
    getData() {
      axios
        .get("/friend/")
        .then(response => {
          this.persons = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleted() {
      axios
        .delete("/friend/4")
        .then(response => {
          this.getData();
          this.isEdit();
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.v-row {
  float: right;
  margin-right: 0px;
}
.clear {
  clear: right;
}
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
