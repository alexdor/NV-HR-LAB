<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Spørgsmål om Politikker</h1>
      <p>
        Vi har samlet 5 spørgsmål, der ofte opstår forbindelse med udarbejdelse
        af politikker.
      </p>
      <div class="accordion__questions">
        <ul>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvor langt må vi gå?</h2>
            <p>
              Der findes flere forhold en virksomhed kan regulere gennem interne
              politikker og retningslinjer. En tommelfingerregel er at en intern
              politik ikke må gå videre end nødvendigt. Med andre ord, må
              politikkerne ikke være for indgribende over for medarbejderne.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvornår skal vi opdatere vores interne politikker?</h2>
            <p>
              Sørg for at holde jeres interne politikker opdateret. Det er
              vigtigt, at politikken er i overensstemmelse med gældende
              lovgivning. <br /><br />
              Ud over lovændringer kan nye tendenser i samfundet også skabe
              behov for nye politikker. Hvem havde tænkt på en politik for
              sociale medier for 10 år siden?
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Pas på omfanget!</h2>
            <p>
              Det er muligt at ændre virksomhedens interne politikker. I skal
              være opmærksomme på, at nogle ændringer kan være så omfattende, at
              ændringen vil udgøre en væsentlig ændring af medarbejderens
              ansættelsesvilkår, og dermed vil kunne betragtes som en opsigelse
              fra jeres side af.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Skal medarbejderne have besked om alle ændringer?</h2>
            <p>
              Nogle af de ændringer som en arbejdsgiver foretager, kan være
              upopulære hos medarbejderne. Det betyder dog ikke, at man som
              arbejdsgiver kan ”snige” ændringer ind i politikken. Særligt ikke
              hvis ændringen er væsentlig. Hvis man senere vil påberåbe sig
              ændringerne, skal medarbejderen naturligvis have besked. De
              forhold [ting] der ellers ville have været en del af en
              ansættelseskontrakt, skal som udgangspunkt varsles.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Skal man have en personalehåndbog eller personalepolitik?</h2>
            <p>
              Der findes ikke noget krav om, at arbejdspladsen har en
              personalehåndbog. Hvis I vælger at have en personalehåndbog, er
              det dog vigtigt, at den er opdateret, stemmer overens med praksis
              på arbejdspladsen [virkeligheden] og at den som udgangspunkt kun
              indeholder de ting, der ikke bør stå i den enkelte medarbejders
              ansættelseskontrakt.
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
  name: "Politikker"
};
</script>
