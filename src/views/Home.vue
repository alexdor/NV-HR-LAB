<template>
  <div>
    <div class="home">
      <Terminations msg="Opsigelser" />
    </div>
  </div>
</template>

<script>
import Terminations from "@/components/Terminations.vue";

export default {
  name: "Home",
  components: {
    Terminations
  }
};
</script>
