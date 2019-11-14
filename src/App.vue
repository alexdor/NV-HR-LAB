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
      <nav role="navigation" class="nav__links--mobile">
        <div id="menuToggle">
          <!-- Fake hidden input and span fields to act as a hamburger menu until we implement Vue components -->
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" class="nav__links">
            <router-link to="/opsigelser">Opsigelser</router-link>
            <router-link to="/om-hr-lab">Om HR Lab</router-link>
            <Search />
            <p>DK</p>
          </ul>
        </div>
      </nav>
    </div>
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo.vue";
import Search from "@/components/icons/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Logo,
    Search,
    Footer
  }
};
</script>

<style lang="scss">
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

  @media screen and (max-width: 640px) {
    flex-direction: row-reverse;
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

.nav__links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
  @media screen and (max-width: 640px) {
    display: none;
  }
}

.nav__links--mobile {
  @media screen and (min-width: 640px) {
    display: none;
  }

  .nav__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 120px;
    justify-content: space-between;

    p,
    svg,
    a {
      margin: 0;
    }
  }
}

@media screen and (max-width: 640px) {
  .nav {
    padding: 10px 20px;
  }
}

// CodePen burger menu until we implement it as a Vue component
// Src: https://codepen.io/erikterwan/pen/EVzeRP
#menuToggle {
  display: block;
  position: relative;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  margin-top: 5px;
}

#menuToggle input {
  display: block;
  position: absolute;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 28px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: #ae966c;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #ae966c;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  padding: 50px;
  background: #f8f3f0;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  width: 90vw;
  margin: 10px 0 0 -21px;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul {
  transform: none;
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
