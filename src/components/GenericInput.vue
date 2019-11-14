<template>
  <input
    :value="value"
    :type="type"
    @input="$emit('input', $event.target.value)"
    @keyup.enter="$emit('enter', $event)"
    @blur="$emit('blur', $event)"
  />
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "GenericInput",
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: "text"
    }
  }
});
</script>
