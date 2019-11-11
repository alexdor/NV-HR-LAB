<template>
  <div>
    <div class="home__header--image"></div>
    <div class="home__header--text">
      <h2>Some heading/subheading/intro for the site</h2>
      <img
        src="../../public/img/icons/arrow.svg"
        alt="Arrow down indicating scroll"
        class="arrow--down"
      />
    </div>
    <div class="home__buttons--container">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div
        id="home__buttons--cointiner"
        class="home__buttons--container-buttons"
      >
        <nv-button v-for="item in items" :key="item.text" class="button--soon">
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

<style media="screen" lang="scss">
.arrow--down {
  transform: translateY(0) rotate(90deg);
  margin-top: 15px;
}

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

  @media screen and (max-width: 640px) {
    width: 80%;
  }
}

.home__buttons--container {
  margin: auto;
  padding: 30px 20px;

  @media screen and (max-width: 640px) {
    padding: 30px 0;
  }
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
  justify-content: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
}

.button--soon:not(:nth-child(3)) {
  &:hover {
    background-color: #9b9b9b;
    border-color: #9b9b9b;
    color: white;
    cursor: no-drop;
    transition: 0.3s;
    -webkit-transition: 0.3s;

    span {
      display: none;
    }

    &:before {
      content: "Kommer snart!";
      transition: 0.3s;
    }
  }

  &:focus {
    outline: 0;
  }
}
</style>

<script>
import NvButton from "@/components/NvButton.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
    NvButton
  },
  data: function() {
    return {
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
    };
  }
});
</script>
