<template>
  <div class="member">
    <MyProfile />
    <MemberPerson />
    <v-card align="center" max-width="1000" class="mx-auto">
      <!-- <router-link to="/creategroup" class="link"> -->
      <v-btn block elevation="3" color="primary" @click="toggleCreate()">
        Create Group
      </v-btn>
      <!-- </router-link> -->
      <create-group v-if="isCreate" />
    </v-card>
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import MemberPerson from "@/components/MemberPerson.vue";
import CreateGroup from "@/views/CreateGroup.vue";

export default {
  name: "Group",
  components: {
    MyProfile,
    MemberPerson,
    CreateGroup
  },
  data() {
    return {
      isCreate: false
    };
  },
  methods: {
    toggleCreate() {
      this.isCreate = !this.isCreate;
    }
  }
};
</script>

<style scoped lang="scss">
.member {
  margin-top: 30px;
}
.link {
  text-decoration: none;
  color: #fff;
  .link-item {
    color: #fff;
  }
}
</style>
