<template>
    <div>
        <div class="home">
          <Terminations msg="Opsigelser" />
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import Terminations from "@/components/Terminations.vue";

export default {
  name: "home",
  components: {
    Terminations
  }
};
</script>
