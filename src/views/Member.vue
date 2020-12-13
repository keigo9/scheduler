<template>
  <div class="member">
    <MyProfile />
    <MemberPerson />
    <v-card align="center" max-width="1000" class="mx-auto">
      <v-btn block elevation="3" color="primary">
        Create Group
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import MemberPerson from "@/components/MemberPerson.vue";

export default {
  name: "Member",
  components: {
    MyProfile,
    MemberPerson
  }
};
</script>

<style scoped lang="scss"></style>
