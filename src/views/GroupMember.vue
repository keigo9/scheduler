<template>
  <div class="member">
    <h1 class="ttl">CPSLab</h1>
    <MemberPerson />
    <v-card align="center" max-width="1000" class="mx-auto">
      <v-btn block elevation="3" color="primary" @click="toggleCreate()">
        Add Member +
      </v-btn>
      <add-member v-if="isCreate" />
    </v-card>
  </div>
</template>

<script>
import MemberPerson from "@/components/MemberPerson.vue";
import AddMember from "@/components/AddMember.vue";

export default {
  name: "Group",
  components: {
    MemberPerson,
    AddMember
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
.ttl {
  text-align: center;
}
.link {
  text-decoration: none;
  color: #fff;
  .link-item {
    color: #fff;
  }
}
</style>
