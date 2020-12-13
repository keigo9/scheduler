<template>
  <div class="member">
    <MyProfile />
    <MemberPerson />
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
