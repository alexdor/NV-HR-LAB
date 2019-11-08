<template>
  <div class="sickday-calculator">
    <SickdayCalculator />
  </div>
</template>

<script>
// @ is an alias to /src
import SickdayCalculator from "@/components/tools/SickDay/SickdayCalculator";

export default {
  name: "SickDayCalculator",
  components: {
    SickdayCalculator
  }
};
</script>
<style lang="scss" scoped></style>
