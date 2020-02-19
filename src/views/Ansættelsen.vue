<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Ved ansættelsen</h1>
      <p>
          Jagten på den rette medarbejder kan overskygge de faldgruber, som en ansættelsesproces indeholder for en arbejdsgiver. Vejen fra jobopslag til kontraktindgåelse består af mange forskellige overvejelser, som skal håndteres bedst muligt for at sikre samarbejdet en god start.
      </p>
    </div>
    <div class="info-row background-color">
      <div class="info-row-content">
        <Legal />
        <div class="info-row-text">
          <p>
              Allerede ved udformningen af et jobopslag og under jobsamtalen er der flere juridiske aspekter, som en arbejdsgiver skal være opmærksom på.
            <br />
            Vi kan fx hjælpe med:
          </p>
          <ul>
            <li>rådgivning om ordlyden i en jobannonce, så I undgår at komme i klemme, fx i forhold til diskriminationslovgivningen. Alder, etnisk oprindelse og køn er de klassiske faldgrupper</li>
            <li>rådgivning om do’s and dont’s i forbindelse med en jobsamtale</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-row">
      <div class="info-row-content mobile-reversed-columns">
        <div class="info-row-text">
          <p>
            Når den rette kandidat er fundet, skal der indgås en ansættelseskontrakt, og her kan vi fx bistå med:
          </p>
          <ul>
            <li>rådgivning om og udarbejdelse af selve ansættelseskontrakten</li>
            <li>rådgivning om særlige forhold relevante for den konkrete ansættelse, så som bonusordninger, overenskomster, forlænget opsigelsesvarsel, ansættelsesklausuler, voldgiftsbestemmelser og lignende</li>
            <li>rådgivning om og håndtering af processen, når der skal søges om opholds- og arbejdstilladelse, hvis den valgte kandidat ikke er borger i et EU/EØS land. I den forbindelse kan vi også rådgive om de relevante aspekter relateret til social sikring og skat </li>
          </ul>
        </div>
        <Pen />
      </div>
    </div>

    <div class="info-row background-color">
      <div class="info-row-content">
        <Law />
        <div class="">
          <p>
              Hvis I allerede har en standardkontrakt, som I bruger, når der skal udarbejdes kontrakter, står vi altid til rådighed, hvis I ønsker standarden gennemgået. Vi sikrer, at jeres standard er up-to-date og i overensstemmelse med lovgivningen. Du er altid velkommen til at ringe og få et tilbud.

          </p>
        </div>
      </div>
    </div>

    <div class="link__container">
        <h3>Har du spørgsmål om ansættelsen?</h3>
        <div class="">
            <a href="/faq-ansættelsen">
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
  name: "Ansættelsen",
  components: {
    Pen,
    Legal
  }
};
</script>
