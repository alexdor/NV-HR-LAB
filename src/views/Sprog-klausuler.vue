<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Spørgsmål om Klausuler</h1>
      <p>
        Når et ansættelsesforhold ophører, opstår spørgsmålet, om og hvordan
        medarbejderen kan tage ansættelse hos en konkurrent eller starte
        konkurrerende virksomhed. <br /><br />
        En konkurrence- eller kundeklausul er aftalte begrænsninger i, hvordan
        medarbejderen kan konkurrere i en periode efter fratrædelsen, og de kan
        give anledning til et væld af spørgsmål.
      </p>
      <div class="accordion__questions">
        <ul>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvordan beregner vi kompensationen?</h2>
            <p>
              Det kan volde besvær at beregne korrekt kompensation for
              konkurrence- og kundeklausuler. Det er ikke gjort med grundløn og
              arbejdsgivers pensionsbidrag. Kompensationen skal beregnes på
              baggrund af den samlede løn på fratrædelsestidspunktet, dvs. inkl.
              alle lønelementer – også kørselstilskud, telefon og bonus.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Gælder klausulen, hvis medarbejderen bliver sagt op?</h2>
            <p>
              Hvis det er en kundeklausul, gælder den uanset hvad, medmindre
              arbejdsgiver opsiger den. Hvis medarbejderen bliver bortvist
              berettiget, gælder klausulen stadig, men medarbejderen har ikke
              krav på kompensation. <br /><br />
              Hvis det derimod er en konkurrenceklausul, vil medarbejderen være
              frigjort fra den, hvis medarbejderen ikke selv er skyld i
              opsigelsen. Det kan fx være ved omstruktureringer eller
              besparelser. Ellers gælder klausulen stadig. Også for
              konkurrenceklausuler gælder det, at klausulen består ved
              berettiget bortvisning, men medarbejderen mister kravet på
              kompensation.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>
              En medarbejder skal have en ny kontrakt – hvad med klausulen?
            </h2>
            <p>
              Der kom nye og strengere regler om klausuler i 2016, men
              klausuler, der var aftalt før da, kan fortsat leve videre. <br />
              Hvis medarbejderen får en ny kontrakt, kan en gammel klausul ”leve
              videre” uden at blive grebet af de nye regler, hvis den
              videreføres helt uændret.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvad betyder ”helt særligt betroet”?</h2>
            <p>
              Hvis en konkurrenceklausul er indgået efter den 1. januar 2016, er
              det et krav, at medarbejderen er ”helt særligt betroet”, og at det
              fremgår af selve aftalen. Derudover skal der være en uddybning af,
              hvad der gør klausulen påkrævet. <br /><br />
              Hovedreglen er, at for at være helt særlig betroet skal man som
              medarbejder være i besiddelse af viden om virksomhedens
              forretningsforhold, der kan gøre skade, hvis medarbejderen straks
              efter fratræden går ud og konkurrerer med den gamle arbejdsgiver.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvor længe kan en klausul gøres gældende?</h2>
            <p>
              Det kommer an på, hvornår aftalen er indgået. <br /><br />
              Hvis klausulen er indgået inden 1. januar 2016, gælder der
              principielt ikke noget maksimum. Det er dog ikke det samme, som at
              arbejdsgivere kan binde medarbejdere i mange år. Domstolene kan
              reducere klausulperioden, hvis den er urimeligt lang.<br /><br />
              Hvis klausulen er indgået efter den 1. januar 2016, gælder der en
              maksimal varighed på 12 måneder, hvis medarbejderen er omfattet af
              én klausul. Hvis medarbejderen er omfattet af både en konkurrence-
              og en kundeklausul, er den maksimale varighed 6 måneder.
              <br /><br />
              Klausulperioder beregnes altid med udgangspunkt i
              fratrædelsesdatoen – også selvom medarbejderen er fritstillet.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "@/styles/main.scss";

export default {
  name: "SprogKlausuler"
};
</script>
