<template>
  <div class="row">
    <div class="col-12 align-self-center">
      <user-card :user="user"></user-card>
    </div>
    <div class="col">
      <SkillChart />
    </div>
  </div>
</template>
<script>
import UserCard from "@/pages/Profile/UserCard";
import SkillChart from "./SkillChart";
export default {
  name: "exo-profile",
  components: {
    UserCard,
    SkillChart
  },
  data() {
    return {
      user: {
        fullName: "Yassin Altaha",
        title: "Software Developer",
        description:
          "Computers and art have always been my biggest passions, desiging and developing software incompase both of those aspectes perfectly. my goal is to keep learning and creating new things as i move forward in the journy as a developer."
      }
    };
  }
};
</script>
<style></style>
