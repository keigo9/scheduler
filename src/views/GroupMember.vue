<template>
  <div class="member">
    <h1 class="ttl">{{ teamName }}</h1>
    <MemberPerson ref="groupmember" />
    <v-card align="center" max-width="1000" class="mx-auto">
      <v-btn block elevation="3" color="primary" @click="toggleCreate()">
        Add Member +
      </v-btn>
      <add-member v-if="isCreate" @isCreate="toggleCreate()" />
    </v-card>
  </div>
</template>

<script>
import MemberPerson from "@/components/MemberPerson.vue";
import AddMember from "@/components/AddMember.vue";

export default {
  name: "Group",
  props: ["teamName"],
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
      this.$refs.groupmember.getData();
    }
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
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
