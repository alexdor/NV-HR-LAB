<template>
  <input
    :value="value"
    type="this.type"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script lang="ts">
export default {
  name: "GenericInput",
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>
