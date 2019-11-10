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
  padding: 15px 30px;
  font-size: 16px;
  color: white;
  background-color: #b19971;
  border: 2px solid #b19971;
  transition: 0.3s;
  border-radius: 40px;
  width: 250px;
  margin: 5px 10px;

  &:hover {
    background-color: white;
    color: #b19971;
  }
}

.button--soon {
  &:hover {
    background-color: #9b9b9b;
    color: white;
  }
}
</style>
