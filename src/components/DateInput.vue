<template>
  <datepicker
    :class="[error ? 'error' : '', 'datepicker']"
    :monday-first="true"
    :full-month-name="true"
    :language="da"
    :value="value"
    :required="true"
    input-class="date-input"
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
.datepicker {
  display: inline-flex;
}

@media screen and (max-width: 640px) {
  // .datepicker {
  //     position: absolute;
  //     height: auto;
  //     left: 15vw;
  // }
  //
  // .datepicker__calendar {
  //     display: flex;
  //     flex-direction: column;
  //     position: absolute;
  //
  //     & > div  {
  //         display: flex;
  //         flex-direction: row;
  //         flex-wrap: wrap;
  //     }
  // }
  //
}
.error .date-input {
  /* TODO: Add tooltip with an error */
  border: 2px solid #c7181e;
}
</style>
