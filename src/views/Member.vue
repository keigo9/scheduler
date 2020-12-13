<template>
  <div class="member">
    <MyProfile />
    <MemberPerson />
    <MemberFooter />
  </div>
</template>

<script>
import MyProfile from "@/components/MyProfile.vue";
import MemberPerson from "@/components/MemberPerson.vue";
import MemberFooter from "@/components/MemberFooter.vue";

export default {
  name: "Member",
  components: {
    MyProfile,
    MemberPerson,
    MemberFooter
  }
};
</script>
