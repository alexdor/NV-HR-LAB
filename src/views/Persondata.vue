<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Databeskyttelse</h1>
      <p>
        Den teknologiske udvikling sammenholdt med indførelsen af nye EU-regler
        om databeskyttelse i 2018 har for alvor krævet, at arbejdsgivere har
        fokus på, hvordan medarbejderoplysninger behandles.
      </p>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
            Reglerne er komplekse, og der kan være et massivt bødeansvar
            forbundet med overtrædelser. Derudover er der stigende fokus hos den
            enkelte på, hvor ens egne personoplysninger er, og hvad de bruges
            til.
            <br />
            Vi kan fx hjælpe med:
          </p>
          <ul>
            <li>
              rådgivning om håndtering af oplysningspligten over for
              medarbejderne
            </li>
            <li>
              rådgivning om offentliggørelse af billeder og oplysninger om
              medarbejdere
            </li>
            <li>
              udarbejdelse af oplysningsskrivelser, persondatapolitikker,
              samtykkeerklæringer mv.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Udover retten til at modtage oplysninger om behandling af
            personoplysninger har medarbejderen også nogle andre rettigheder
            efter databeskyttelseslovgivningen, som arbejdsgiver skal være
            opmærksom på. Det er ofte, når ansættelsesforholdet slutter, at der
            kan opstå tvivl om medarbejderens rettigheder.
            <br />
            Vi kan fx hjælpe med
          </p>
          <ul>
            <li>
              rådgivning om opbevaring og sletning af medarbejderoplysninger
            </li>
            <li>
              håndtering af begæringer om indsigt i egne personoplysninger fra
              en medarbejder
            </li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="link__container">
      <h3>Har du spørgsmål om databeskyttelse?</h3>
      <div class="">
        <a href="/faq-databeskyttelse">
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
  name: "Klausuler",
  components: {
    Pen,
    Legal
  }
};
</script>
