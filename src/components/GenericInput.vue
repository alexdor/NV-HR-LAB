<template>
  <input
    :value="value"
    :type="type"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GenericInput",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  }
});
</script>
