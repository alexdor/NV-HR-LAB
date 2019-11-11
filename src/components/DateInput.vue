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
  /* TODO: Add tooltip with an error */
  border: 2px solid #c7181e;
}

input {
  border: 2px solid #ae966c;
  text-align: left;
  padding: 11px 30px;
  width: 220px;
  border-radius: 30px;
  font-size: 16px;
  margin: 5px;
  color: #363535;

  &[type="number"] {
    width: 50px;
  }

  &:focus {
    outline: 0;
  }
}
</style>
