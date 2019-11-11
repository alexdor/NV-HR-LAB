<template>
  <div>
    <div class="header-image home-header"></div>
    <div class="header-text">
      <h2>Some heading/subheading/intro for the site</h2>
      <img
        src="../../public/img/icons/arrow.svg"
        alt="Arrow down indicating scroll"
        class="arrow-down"
      />
    </div>
    <div class="home-buttons-container">
      <p>Tryk en af følgende emner for at lære mere</p>
      <div id="home__buttons--cointiner" class="home-buttons-container-buttons">
        <nv-button v-for="item in items" :key="item.text" class="button-soon">
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
        >
          <span>{{ item.text }}</span>
        </nv-button>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/main.scss";
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
      ],
      items2: [
        { text: "Opsigelsesvarsel" },
        { text: "Sygedagsberegner" },
        { text: "§7U" }
      ]
    };
  }
});
</script>
