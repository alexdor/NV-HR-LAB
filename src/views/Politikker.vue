<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Politikker</h1>
      <p>
        Som arbejdsgiver kan du fastsætte interne retningslinjer for, hvad jeres
        medarbejdere må og ikke må – naturligvis med måde. Måske har I et behov
        for, at fastholde et særligt image udadtil. Der kan være mange grunde
        til, at I ønsker, at fastsætte regler fx om særlig påklædning,
        arbejdsgange, alkoholindtagelse, brug af sociale medier i arbejdstiden
        eller lignende.
      </p>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
            Der er flere overvejelser man skal gøre sig, når man skal udforme
            interne politikker.
            <br />
            Vi kan hjælpe dig med:
          </p>
          <ul>
            <li>at politikken ikke er diskriminerende</li>
            <li>
              at politikken ikke er for indgribende/går længere end hvad man kan
              kræve af sine medarbejdere
            </li>
            <li>
              at politikken ikke virker chikanerende eller forskelsbehandler
              medarbejderne
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Måske har I allerede fastsat interne retningslinjer, som I ønsker at
            ændre, eller ønsker at opdatere. I dag bruger vi fx sociale medier
            meget mere end tidligere og derfor kan mange virksomheder have behov
            for, at lave regler for, hvordan medarbejderne må bruge f.eks.
            Facebook i arbejdstiden.
            <br />
            Vi kan fx hjælpe med:
          </p>
          <ul>
            <li>
              opdatering at jeres nuværende politikker, så de følger med tiden
            </li>
            <li>
              at vurdere om ændringen af en intern politik medfører væsentlige
              ændringer af medarbejdernes arbejdsvilkår
            </li>
            <li>Eller blot sparre med jer, om I har behov for ændringer.</li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="link__container">
      <h3>Har du spørgsmål om politikker?</h3>
      <div class="">
        <a href="/faq-politikker">
          <img
            src="../../public/img/icons/arrow.svg"
            alt="Clickable arrow"
            class="arrow-down pointer"
          />
          <h3 class="link__button">Læs mere</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/main.scss";
import Pen from "@/components/icons/Pen.vue";
import Legal from "@/components/icons/Legal.vue";

export default {
  name: "Politikker",
  components: {
    Pen,
    Legal
  }
};
</script>
