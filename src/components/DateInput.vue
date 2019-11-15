<template>
  <datepicker
    :class="[error ? 'error' : '', 'datepicker']"
    input-class="date-input"
    calendar-class="calendar"
    :monday-first="true"
    :full-month-name="true"
    :language="da"
    :value="value"
    :required="true"
    @selected="$emit('selected', $event)"
    @input="$emit('input', $event)"
    @closed="$emit('closed', $event)"
  ></datepicker>
</template>
<script lang="ts">
import Datepicker from "vuejs-datepicker";
import { da } from "vuejs-datepicker/dist/locale";
import Vue from "vue";
export default Vue.extend({
  name: "DateInput",
  components: { Datepicker },
  props: {
    value: { type: [Date, String] },
    error: { type: Boolean, default: false }
  },
  data() {
    return {
      da
    };
  }
});
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .datepicker {
    position: static;
    &::v-deep .calendar {
      position: fixed;
      top: 50%;
      left: 5%;
      margin-top: -25%;
      width: 90%;
      z-index: 2000;
      outline: rgba(0, 0, 0, 0.5) solid 9999px;
    }
  }
}

.error .date-input {
  /* TODO: Add tooltip with an error */
  border: 2px solid #c7181e;
}
</style>
