<template>
  <div class="info">
    <div class="info-overview">
      <h1>Opsigelser</h1>
      <p>
        Det er ikke altid let at opsige en medarbejder. Reglerne er mange – og
        det kan være en omkostningstung affære for arbejdsgiveren, hvis en
        opsigelsessituation ikke bliver håndteret korrekt.
      </p>
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
        <Legal />
      </div>
    </div>

    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
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
  </div>
</template>

<script lang="ts">
import "@/assets/main.scss";
// import Pen from "@/components/icons/Pen.vue";
import Legal from "@/components/icons/Legal.vue";
export default {
  name: "Termination",
  components: {
    // Pen,
    Legal
  }
};
</script>
