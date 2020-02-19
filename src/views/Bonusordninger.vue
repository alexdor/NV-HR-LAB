<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Bonusordninger</h1>
      <p>
        Løn kan være sammensat af mange forskellige elementer. Særligt er en
        bonusordning udbredt som incitamentsaflønning. Den enkelte virksomhed
        kan have forskellige grunde til at indføre en bonusordning, og den kan
        også i vid udstrækning strikkes sammen, så den tjener det formål, som
        virksomheden ønsker. Vi møder jævnligt virksomheder, der har behov for
        sparring, når en bonusordning skal oprettes eller revideres.
      </p>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
            Forskellige virksomheder har selvsagt forskellige målsætninger og
            derfor også forskellige begrundelser for at indføre bonusordninger.
            Under alle omstændigheder er vigtigt, at virksomheden gør sig klart,
            hvad formålet med bonusordningen er – altså hvad I gerne vil opnå
            med den. Det kunne f.eks. være øget effektivitet, motiverede
            medarbejdere, succesfuld gennemførelse af et bestemt projekt eller
            større indtjening/omsætning.
            <br />
            Vi kan f.eks. hjælpe med at:
          </p>
          <ul>
            <li>formulere en bonusordning</li>
            <li>
              hjælpe med at definere betingelser og bonusmål, der skal ligge til
              grund for beregningen af bonus
            </li>
            <li>
              gennemgå en nuværende bonusordning med henblik på mulig opdatering
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Som udgangspunkt er der aftalefrihed, når det kommer til
            bonusordninger. Som arbejdsgiver har man stor frihed til at
            fastsætte mål og betingelser for opnåelse af bonus. Når man opretter
            en bonusordning, der det vigtigt at holde for øje, om der i
            ansættelseskontrakten eller i en overenskomst findes begrænsninger
            [for ordningen].
            <br />
            Vi kan hjælpe jer med, at:
          </p>
          <ul>
            <li>
              formulere betingelserne for bonusordningen, så der ikke senere
              opstår tvivl om hvad der gælder
            </li>
            <li>
              tilbyde sparing om hvorfor bonusordningen ønskes indført og om en
              bonusordning er den rigtige løsning for jer
            </li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="info-row background-color">
      <div class="info-row-content">
        <div class="">
          <p>
            Der kan senere opstå et behov for foretage ændringer i ordningen.
            Man skal som arbejdsgiver bl.a. overveje om bonusvilkårene for det
            enkelte år skal aftales, forhandles eller fastsættes. <br /><br />
            Det kan også være vigtigt at tage stilling til hvilke medarbejdere
            der er omfattet af bonusordningen. Er det alle medarbejderne eller
            kun nogle udvalgte grupper? <br /><br />
            De virksomheder der benytter bonusordninger, skal være opmærksomme
            på, at nogle medarbejdergrupper kan være berettiget til at få
            udbetalt en forholdsmæssig bonus ved fratræden.
          </p>
        </div>
      </div>
    </div>

    <div class="link__container">
      <h3>Har du spørgsmål om bonusordninger?</h3>
      <div class="">
        <a href="/faq-bonusordninger">
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
  name: "Bonusordninger",
  components: {
    Pen,
    Legal
  }
};
</script>
