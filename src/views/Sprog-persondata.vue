<template>
  <div class="info">
    <div class="info-overview">
      <h1 class="slide-transition">Spørgsmål om Databeskyttelse</h1>
      <p>
        Databeskyttelse har for alvor gjort sit indtog – også i
        ansættelsesforhold. Det er et komplekst område, der griber ind i alle
        dele af ansættelsesforholdet, og der er mange spørgsmål – små og store –
        der kan opstå. <br />
        Vi har samlet 5 af de spørgsmål, som vi oftest støder på.
      </p>
      <div class="accordion__questions">
        <ul>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Skal vi have en persondatapolitik?</h2>
            <p>
              Den dataansvarlige – dvs. den, der er ansvarlig for behandling af
              personoplysninger – skal give en række oplysninger om behandlingen
              til de registrerede. Det gælder både kandidater og medarbejdere,
              men også kunder og andre, som virksomheden måtte behandle
              personoplysninger om. <br /><br />
              Om man som arbejdsgiver vælger at kalde det en
              oplysningsskrivelse, information om behandling af
              personoplysninger eller en persondatapolitik, er for så vidt
              underordnet. Hovedsagen er, at der skal udleveres en lang række
              oplysninger til kandidater og medarbejder, fx om hvilke
              personoplysninger, der behandles, hvad oplysningerne anvendes til,
              hvor længe de opbevares, og hvilke rettigheder, som
              databeskyttelseslovgivningen giver de registrerede.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>
              Skal vi slette oplysninger om alkoholbehandling i en personalesag?
            </h2>
            <p>
              Medarbejdere kan ønske at få slettet oplysninger i en
              personalesag, som medarbejderen ikke ønsker at have liggende, fx
              oplysninger om, at medarbejderen måske for år tilbage har været i
              alkoholbehandling. <br /><br />
              Selvom personoplysninger kun må opbevares, så længe der er et
              sagligt formål med det, har Datatilsynet udtalt, at arbejdsgivere
              ikke er forpligtet til at slette oplysninger i personalesagen
              løbende i ansættelsesforholdet, fordi det er et sagligt, legitimt
              formål at kunne bevare historikken i et ansættelsesforhold.
              <br /><br />
              Hvis man begynder at slette oplysninger, fordi en medarbejder
              beder om det, kan man risikere, at personalesagen ikke længere
              giver et retvisende billede af ansættelsesforholdet. Det kan blive
              problematisk af flere årsager, fx hvis der senere opstår en tvist
              med medarbejderen.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Må vi opbevare billeder af medarbejderne?</h2>
            <p>
              Hvis der er behov for at opbevare et billede af medarbejderne, fx
              til ID-kort, eller lignende, er det helt i orden. <br /><br />
              Hvis arbejdsgiveren ønsker at offentliggøre billeder af
              medarbejdere – både portrætter og billeder fra begivenheder, hvor
              medarbejderen optræder – skal der indhentes samtykke fra
              medarbejderen.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>Hvor længe kan vi gemme personoplysninger om medarbejderne?</h2>
            <p>
              Arbejdsgiver kan opbevare personoplysninger, så længe der er et
              sagligt formål med det. <br /><br />
              Det er svært at lave et præcist skema for, hvor længe de enkelte
              personoplysninger kan opbevares, men hvis der fx er et lovkrav om,
              at oplysninger skal opbevares, må man selvfølgelig opbevare
              oplysningerne, så længe det er krævet. Det gælder fx
              bogføringsmateriale, der skal opbevares 5 år efter et regnskabsårs
              afslutning. <br /><br />
              Det vil også være sagligt at opbevare personalesagen frem til det
              tidspunkt, hvor der ikke længere er mulighed for, at medarbejderen
              kan rejse krav mod arbejdsgiveren. Krav i ansættelsesforhold
              forældes som hovedregel 5 år efter ansættelsesforholdets ophør.
            </p>
          </li>
          <li>
            <input type="checkbox" checked />
            <i></i>
            <h2>
              Har medarbejderen krav på at få udleveret sine mails efter
              fratræden?
            </h2>
            <p>
              Ja, medarbejderen har krav på at få udleveret sine private mails,
              som måtte befinde sig i arbejdsgiverens systemer, efter
              fratræden.<br /><br />
              Arbejdsmails, som medarbejderen har sendt og modtaget i løbet af
              ansættelsesforholdet, tilhører derimod arbejdsgiveren og skal ikke
              udleveres.<br /><br />
              Det gælder også, selvom medarbejderen begærer indsigt i sine
              personoplysninger. Selvom selve mailadressen er en
              personoplysning, er det ikke ensbetydende med, at medarbejderen
              skal have udleveret e-mailsene.
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
  name: "Persondata"
};
</script>
