<template>
  <div class="member">
    <h1>This is an member page</h1>
    <MemberPerson />
  </div>
</template>

<script>
import MemberPerson from "@/components/MemberPerson.vue";

export default {
  name: "Member",
  components: {
    MemberPerson
  }
};
</script>
