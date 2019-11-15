<template>
  <div id="app">
    <div class="nav__container">
      <router-link to="/" class="nav__logo--link">
        <Logo />
      </router-link>
      <!-- Desktop nav -->
      <nav class="nav nav__links--desktop">
        <div class="nav__links">
          <router-link to="/opsigelser">Opsigelser</router-link>
          <router-link to="/opsigelseberegner">Opsigelses Beregner</router-link>
          <router-link to="/sygedagsberegner">Sygedagsberegner</router-link>
          <router-link to="/om-hr-lab">Om HR Lab</router-link>
          <Search />
          <p>DK</p>
        </div>
      </nav>
      <!-- Mobile nav -->
      <Slide class="slide">
        <a id="home" href="#" class="nav__links--mobile">
          <span>Home</span>
          <ul id="menu" class="nav__links">
            <router-link to="/opsigelser">Opsigelser</router-link>
            <router-link to="/opsigelseberegner"
              >Opsigelses Beregner</router-link
            >
            <router-link to="/sygedagsberegner">Sygedagsberegner</router-link>
            <router-link to="/om-hr-lab">Om HR Lab</router-link>
            <Search />
            <p>DK</p>
          </ul>
        </a>
      </Slide>
    </div>
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";
import Search from "@/components/icons/Search.vue";
import Footer from "@/components/Footer.vue";
import { Slide } from "vue-burger-menu";

export default {
  name: "App",
  components: {
    Logo,
    Search,
    Footer,
    Slide
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

body {
  margin: 0;
}

.pointer {
  cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ae966c;
  font-family: Avenir, Helvetica Neue, Helvetica, sans-serif;
  min-height: 100vh;
  position: relative;
}

.content {
  padding-bottom: $footerHeight;
}

.nav__container {
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px;

  @media screen and (max-width: 1000px) {
    height: 30px;
  }
}

.slide {
  @media screen and (min-width: 1000px) {
    display: none;
  }
}

.nav {
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .nav__logo--link {
    height: 30px;
    display: flex;

    a {
      display: flex;
    }
  }
}

.bm-overlay {
  background: none;
}

.nav__links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }

  a,
  p {
    color: #ae966c;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    margin: 0 15px;
  }

  svg {
    margin: 0 15px;
  }
}

.nav__links--desktop {
  @media screen and (max-width: 1000px) {
    display: none;
  }
}

.nav__links--mobile {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  text-align: left;

  @media screen and (min-width: 1000px) {
    display: none;
  }

  p,
  svg,
  a {
    margin: 10px 0;
  }
}

@media screen and (max-width: 1000px) {
  .nav {
    padding: 10px 20px;
  }
}

.bm-menu {
  right: 0;
  left: auto;
}

.bm-burger-button {
  right: 3vh;
  left: auto;
  top: 15px;

  .line-style {
    border-radius: 30px;
    height: 16%;
  }

  .bm-burger-bars {
    background: $brown;
  }
}

input {
  border: 2px solid #ae966c;
  text-align: left;
  padding: 11px 30px;
  width: 220px;
  border-radius: 30px;
  font-size: 16px;
  margin: 5px;
  color: #363535;
  background: none;

  &[type="number"] {
    width: 50px;
  }

  &:focus {
    outline: 0;
  }
}
</style>
