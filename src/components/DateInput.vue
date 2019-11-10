<template>
  <datepicker
    :class="[error ? 'error' : '', 'datepicker']"
    :typeable="true"
    :monday-first="true"
    :value="value"
    :required="true"
    input-class="date-input"
    @selected="$emit('input', $event)"
    @input="$emit('input', $event)"
    @closed="$emit('closed', $event)"
  ></datepicker>
</template>
<script lang="ts">
import Datepicker from "vuejs-datepicker";

import Vue from "vue";
export default Vue.extend({
  name: "DateInput",
  components: { Datepicker },
  props: {
    value: { type: [Date, String] },
    error: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss">
.datepicker {
  display: inline-flex;
}
.error .date-input {
  /* TODO: imporve the styling */
  /* TODO: Add tooltip with an error */
  border: 1px solid red;
  padding: 0.2rem;
}

input {
  border: 2px solid #ae966c;
  border-radius: 10px;
  text-align: left;
  padding: 5px;
}
input[type="number"] {
  width: 60px;
}
</style>
