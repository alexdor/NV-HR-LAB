<template>
  <div>
    <div class="home__header--image"></div>
    <div class="home__header--text">
      <Logo />
      <h3>Some heading/subheading/intro of the page</h3>
    </div>
    <div class="home__buttons--container">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div
        id="home__buttons--cointiner"
        class="home__buttons--container-buttons"
      >
        <nv-button v-for="item in items" :key="item" class="button--soon">
          <span>{{ item.text }}</span>
        </nv-button>
      </div>
    </div>
    <div class="home__buttons--container background--color">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div class="home__buttons--container-buttons">
        <nv-button>Opsigelsesvarsel</nv-button>
        <nv-button>Sygedagsberegner</nv-button>
        <nv-button>§7U</nv-button>
      </div>
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

.home__buttons--container {
  margin: 20px auto;
  padding: 30px 20px;
}

.background--color {
  background-color: #f8f3f0;
}

.home__buttons--container-buttons {
  max-width: 850px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
}
</style>

<script>
import Logo from "@/components/icons/Logo.vue";
import NvButton from "@/components/NvButton.vue";

const buttonText = new Vue({
  el: "#home__buttons--cointiner",
  data: {
    items: [
      { text: "Ansættelsen" },
      { text: "Bonus" },
      { text: "Opsigelser / Bortvisning" },
      { text: "Persondata" },
      { text: "Politikker" },
      { text: "Klausuler" },
      { text: "Podcast" },
      { text: "HR-legal partner / Hotline" },
      { text: "Følg Med / Ajour" }
    ]
  }
});

export default {
  name: "Home",
  components: {
    Logo,
    NvButton
  }
};
</script>
