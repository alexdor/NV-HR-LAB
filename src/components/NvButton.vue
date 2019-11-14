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
  padding: 11px 30px;
  font-size: 16px;
  color: white;
  background-color: #b19971;
  border: 2px solid #b19971;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  border-radius: 40px;
  width: 250px;
  margin: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #b19971;
  }

  &:focus {
    outline: none;
  }
}
</style>
