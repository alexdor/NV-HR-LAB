<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Klausuler</h1>
      <p>
        Når et ansættelsesforhold ophører, opstår spørgsmålet, om og hvordan
        medarbejderen kan tage ansættelse hos en konkurrent eller starte
        konkurrerende virksomhed. <br /><br />
        Alle medarbejdere vil være omfattet af loyalitetspligt, tavshedspligt og
        forbuddet mod misbrug af arbejdsgivers forretningshemmeligheder. Men
        derudover kan der være aftalt konkurrence- eller kundeklausuler i
        ansættelsesforholdet.
      </p>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
            Reglerne for klausuler er komplekse – der er endda forskellige
            regelsæt, alt efter hvornår aftalen er lavet – og hvis man som
            arbejdsgiver begår fejl, kan det betyde, at klausulen er ugyldig, og
            at man ikke får den beskyttelse, som klausulen ellers ville give.
            <br />
            Vi kan fx hjælpe med:
          </p>
          <ul>
            <li>
              udarbejdelsen af konkurrence- og kundeklausuler, så de formelle
              krav til indhold er overholdt
            </li>
            <li>
              spørgsmål om beregning af kompensation og reduktion/modregning ved
              nyt arbejde
            </li>
            <li>
              spørgsmål om, hvordan og under hvilke omstændigheder klausulen kan
              håndhæves
            </li>
            <li>rådgivning ved mistanke om konkrete overtrædelser</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Selvom der er indgået aftale om klausuler med medarbejderen, kan det
            sagtens ske, at virksomheden ikke synes, der er brug for den, når
            medarbejderen først siger op. Det rejser spørgsmålet, om
            arbejdsgiver kan komme ud af aftalen om klausulen, og om der i så
            fald skal betales hel eller delvis kompensation alligevel.
            <br />
            Vi kan fx hjælpe med
          </p>
          <ul>
            <li>
              spørgsmål om opsigelse af klausulen – hvornår skal det ske og får
              det betydning for kompensationen
            </li>
            <li>
              spørgsmål om sammenhængen mellem baggrunden for
              ansættelsesforholdets ophør og klausulens håndhævelse
            </li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="link__container">
      <h3>Har du spørgsmål om klausuler?</h3>
      <div class="">
        <a href="/faq-klausuler">
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
