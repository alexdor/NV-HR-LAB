<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        <Logo />
      </router-link>
      <div class="nav-links">
        <router-link to="/about">Om HR Lab</router-link>
        <Search />
        <p>DK</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";
import Search from "@/components/icons/Search.vue";

export default {
  name: "App",
  components: {
    Logo,
    Search
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ae966c;
  font-family: Avenir, Helvetica Neue, Helvetica, sans-serif;
}

.nav {
  padding: 30px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-basis: 22%;
    justify-content: space-between;

    a,
    p {
      color: #ae966c;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
    }
  }
}
</style>
