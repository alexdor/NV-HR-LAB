<template>
  <div>
    <div class="header-image home-header"></div>
    <div class="header-text">
      <div class="slide-transition">
        <h1>Velkommen til HR-Lab</h1>
        <h3>Din juridiske værktøjskasse</h3>
      </div>
      <img
        src="../../public/img/icons/arrow.svg"
        alt="Arrow down indicating scroll"
        class="arrow-down pointer"
        @click="scrollToContent"
      />
    </div>
    <div ref="content" class="home-buttons-container">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div id="home__buttons--cointiner" class="home-buttons-container-buttons">
        <nv-button
          v-for="item in items"
          :key="item.text"
          class="button-soon"
          @click="$router.push(item.route)"
        >
          <span>{{ item.text }}</span>
        </nv-button>
      </div>
    </div>
    <div class="home-buttons-container background-color">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div class="home-buttons-container-buttons">
        <nv-button
          v-for="item in items2"
          :key="item.text"
          class="button-soon-section2"
          @click="$router.push(item.route)"
        >
          <span>{{ item.text }}</span>
        </nv-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/main.scss";
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
        { text: "Ansættelsen", route: "ansættelsen" },
        { text: "Bonus", route: "bonusordninger" },
        { text: "Opsigelser / Bortvisning", route: "opsigelser" },
        { text: "Persondata", route: "databeskyttelse" },
        { text: "Politikker", route: "politikker" },
        { text: "Klausuler", route: "klausuler" },
        { text: "Podcast" },
        { text: "HR-legal partner / Hotline" },
        { text: "Følg Med / Ajour", route: "ajour" }
      ],
      items2: [
        { text: "Opsigelsesvarsel", route: "opsigelseberegner" },
        { text: "Sygedagsberegner", route: "sygedagsberegner" },
        { text: "§7U" }
      ]
    };
  },
  methods: {
    scrollToContent() {
      this.$nextTick(() => {
        window.scrollTo({
          top: (this.$refs.content as any).offsetTop,
          behavior: "smooth"
        });
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.home-header {
  background-image: url("../../public/img/header-img-1.jpg");
  height: 75vh;
  background-position: 50% 20%;
}

.home-buttons-container {
  margin: auto;
  padding: 30px 20px;

  @media screen and (max-width: 640px) {
    padding: 30px 0;
  }

  &-buttons {
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
}

.button-soon:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)):not(:nth-child(5)):not(:nth-child(6)):not(:nth-child(9)),
.button-soon-section2:nth-child(3) {
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

.arrow-down {
  transform: translateY(0) rotate(90deg);
  margin-top: 15px;
  transition: 0.6s;
  &:hover {
    transform: scale(1.5) translateY(0) rotate(90deg);
  }
}
</style>
