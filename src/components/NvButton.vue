<template>
  <button class="btn" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "NvButton",
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.2rem 0.7rem;
}
</style>
