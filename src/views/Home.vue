<template>
  <div>
    <div class="home__header--image"></div>
    <div class="home__header--text">
      <Logo />
      <p>Some description/subheading text if needed</p>
    </div>
    <div class="">
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <hr />
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
    </div>
  </div>
</template>

<style media="screen">
.home__header--image {
  background-image: url("../../public/img/header-image.jpg");
  background-size: cover;
  height: 75vh;
  background-position: 50% 5%;
}

.home__header--text {
  margin: auto;
  padding: 5px;
  width: 55%;
  margin-top: -30px;
  background-color: white;
}
</style>

<script>
import Logo from "@/components/icons/Logo.vue";

export default {
  name: "Home",
  components: {}
};
</script>
