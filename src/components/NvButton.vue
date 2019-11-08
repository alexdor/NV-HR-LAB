<template>
  <button class="btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NvButton",
  methods: {
    handleClick(): void {
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.2rem 0.7rem;
}
</style>
