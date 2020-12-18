<template>
  <div class="member">
    <MyProfile />
    <Groups />
    <v-card align="center" max-width="1000" class="mx-auto">
      <v-btn block elevation="3" color="primary" @click="toggleCreate()">
        Create Group
      </v-btn>
      <create-group v-if="isCreate" />
    </v-card>
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import Groups from "@/components/Groups.vue";
import CreateGroup from "@/components/CreateGroup.vue";

export default {
  name: "Group",
  components: {
    MyProfile,
    Groups,
    CreateGroup
  },
  data() {
    return {
      isCreate: false,
      formData: {
        src: "",
        groupname: ""
      }
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
