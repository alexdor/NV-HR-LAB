<template>
  <input
    :value="value"
    type="date"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script lang="ts">
export default {
  name: "DateInput",
  props: { value: { required: true } }
};
</script>
