<template>
  <div class="member">
    <MemberPerson />
    <v-card align="center" max-width="1000" class="mx-auto">
      <router-link to="/creategroup" class="link">
        <v-btn block elevation="3" color="primary">
          Create Group
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import MemberPerson from "@/components/MemberPerson.vue";

export default {
  name: "Group",
  components: {
    MemberPerson
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
