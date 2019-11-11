<template>
  <div class="home">
    <div class="home-row-1">
      <h1>Opsigelser</h1>
      <div class="home-row-1-content">
        <p>
          Det er ikke altid let at opsige en medarbejder. Reglerne er mange – og
          det kan være en omkostningstung affære for arbejdsgiveren, hvis en
          opsigelsessituation ikke bliver håndteret korrekt.
        </p>
        <Pen />
      </div>
    </div>
    <div class="home-row-2">
      <Legal />
      <p>
        I nogle situationer er det relevant at give medarbejderen en skriftlig
        advarsel for at give medarbejderen en mulighed for at rette op på
        kritisable forhold.
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
    <div class="home-row-3">
      <div class="">
        <p>
          Hvis det kommer til en situation, hvor medarbejderen skal opsiges kan
          vi hjælpe jer bedst muligt igennem processen ved fx at afklare mulige
          risici, vurdere opsigelsesgrundlaget og udarbejde de nødvendige
          dokumenter.
          <br />
          Vi kan fx hjælpe med
        </p>
        <ul>
          <li>
            udarbejdelse af opsigelsesbrev og vejledning om opsigelsesprocessen
          </li>
          <li>
            udarbejdelse af evt. fratrædelsesaftale og rådgivning i evt.
            forhandlinger med medarbejderen
          </li>
        </ul>
      </div>
    </div>
    <div class="home-row-4">
      <div class="">
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
</template>

<script lang="ts">
import Pen from "@/components/icons/Pen.vue";
import Legal from "@/components/icons/Legal.vue";
export default {
  name: "Termination",
  components: {
    Pen,
    Legal
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  margin: 40px auto;
  text-align: left;
  color: #ae966c;
  font-family: Avenir, Helvetica Neue, Helvetica, sans-serif;
  max-width: 850px;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 17px;
    line-height: 24px;
  }
  .home-row-1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 2px dotted #ae966c;
    padding: 40px 0;
    .home-row-1-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      p {
        flex-basis: 60%;
      }
    }
  }
  .home-row-2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px dotted #ae966c;
    padding: 40px 0;
    p {
      flex-basis: 60%;
    }
  }
  .home-row-3,
  .home-row-4 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
    border-bottom: 2px dotted #ae966c;
    div {
      flex-basis: 60%;
      margin: auto;
    }
  }
  .home-row-4 {
    border-bottom: none;
  }
}
</style>
