<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Opsigelser</h1>
      <p>
        Det er ikke altid let at opsige en medarbejder. Reglerne er mange – og
        det kan være en omkostningstung affære for arbejdsgiveren, hvis en
        opsigelsessituation ikke bliver håndteret korrekt.
      </p>

      <div class="link__container">
        <div class="">
          <a href="/opsigelseberegner">
            <img
              src="../../public/img/icons/arrow.svg"
              alt="Clickable arrow"
              class="arrow-down pointer"
            />
            <h2 class="link__button">Beregn dit opsigelsesvarsel</h2>
          </a>
        </div>
      </div>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
            I nogle situationer er det relevant at give medarbejderen en
            skriftlig advarsel for at give medarbejderen en mulighed for at
            rette op på kritisable forhold.
            <br />
            Vi kan fx hjælpe med:
          </p>
          <ul>
            <li>
              rådgivning om evt. forudgående advarsel og udarbejdelse af en
              skriftlig advarsel, hvis relevant
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Hvis det kommer til en situation, hvor medarbejderen skal opsiges
            kan vi hjælpe jer bedst muligt igennem processen ved fx at afklare
            mulige risici, vurdere opsigelsesgrundlaget og udarbejde de
            nødvendige dokumenter.
            <br />
            Vi kan fx hjælpe med
          </p>
          <ul>
            <li>
              udarbejdelse af opsigelsesbrev og vejledning om
              opsigelsesprocessen
            </li>
            <li>
              udarbejdelse af evt. fratrædelsesaftale og rådgivning i evt.
              forhandlinger med medarbejderen
            </li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="info-row background-color">
      <div class="info-row-content">
        <Law />
        <div class="info-row-text">
          <p>
            Vi hjælper også gerne med de spørgsmål, der melder sig i
            opsigelsesprocessen, som fx
          </p>
          <ul>
            <li>hvordan håndterer vi medarbejderens ferie?</li>
            <li>hvordan håndterer vi skat af en fratrædelsesgodtgørelse?</li>
            <li>
              kan medarbejderen pålægges at aflevere sin bil, pc og mobiltelefon
              ved en fritstilling?
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="link__container">
      <h3>Har du spørgsmål om opsigelse?</h3>
      <div class="">
        <a href="/faq-opsigelser">
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
import Law from "@/components/icons/Law.vue";

export default {
  name: "Termination",
  components: {
    Pen,
    Legal,
    Law
  }
};
</script>
