<template>
  <div class="footer">
    <p>© Norrbom Vinding {{ new Date().getFullYear() }}</p>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $footerHeight;
}
</style>
