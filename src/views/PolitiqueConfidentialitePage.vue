<template>
  <main class="privacy-page">
    <section class="gallery-hero">
      <div class="container">
        <div class="gallery-hero__content" v-motion-fade>
          <span class="section-label">Protection des données</span>
          <h1 class="gallery-hero__title">Politique de confidentialité</h1>
          <p class="gallery-hero__sub">
            Principes simples sur les données collectées via les formulaires du site du CCI Ivato.
          </p>
        </div>
      </div>
    </section>

    <article class="legal">
      <div class="container legal__inner">
        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">1. Introduction</h2>
          <p>
            Le Centre de Conférences International d'Ivato (CCI), exploité par MADECO S.A., veille à
            la protection des données personnelles collectées via son site internet.
          </p>
          <p>
            La présente politique a pour objet d'informer les utilisateurs sur la manière dont leurs
            données sont collectées et utilisées.
          </p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">2. Responsable du traitement</h2>
          <p>Le responsable du traitement des données est :</p>
          <p>
            <strong>Centre de Conférences International d'Ivato (CCI)</strong><br />
            Exploité par <strong>MADECO S.A.</strong><br />
            CCI Ivato, Antananarivo, Madagascar
          </p>
          <p>
            E-mail : commercial.cci@madeco.mg<br />
            Téléphone : +261 32 03 623 00
          </p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">3. Données collectées</h2>
          <p>Le site peut collecter uniquement les données suivantes via ses formulaires :</p>
          <ul class="legal__list">
            <li>nom</li>
            <li>adresse e-mail</li>
          </ul>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">4. Finalité de la collecte</h2>
          <p>Ces données sont collectées uniquement afin de :</p>
          <ul class="legal__list">
            <li>répondre aux demandes d'information</li>
            <li>traiter les demandes de contact ou de devis</li>
            <li>assurer un suivi des échanges avec les utilisateurs</li>
          </ul>
          <p>Les données ne sont pas utilisées à des fins commerciales non sollicitées.</p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">5. Conservation des données</h2>
          <p>
            Les données collectées sont conservées uniquement pendant la durée nécessaire au
            traitement des demandes et au suivi des échanges.
          </p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">6. Destinataires des données</h2>
          <p>
            Les données collectées sont destinées exclusivement aux services habilités du Centre de
            Conférences International d'Ivato / MADECO S.A.
          </p>
          <p>Elles ne sont ni vendues, ni cédées à des tiers.</p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">7. Sécurité</h2>
          <p>
            Le CCI met en œuvre les mesures raisonnables nécessaires pour assurer la sécurité et la
            confidentialité des données collectées via son site internet.
          </p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">8. Droits des utilisateurs</h2>
          <p>Conformément à la réglementation applicable, chaque utilisateur peut demander :</p>
          <ul class="legal__list">
            <li>l'accès à ses données</li>
            <li>leur rectification</li>
            <li>leur suppression</li>
          </ul>
          <p>Toute demande peut être adressée à :</p>
          <p>E-mail : commercial.cci@madeco.mg</p>
        </section>

        <section class="legal__block" v-motion-fade>
          <h2 class="legal__h2">9. Contact</h2>
          <p>
            Pour toute question relative à la présente politique de confidentialité, vous pouvez
            nous contacter à :
          </p>
          <p>
            E-mail : commercial.cci@madeco.mg<br />
            Téléphone : +261 32 03 623 00
          </p>
        </section>
      </div>
    </article>
  </main>
</template>

<style scoped>
.privacy-page {
  padding-top: var(--nav-height);
}

.gallery-hero {
  padding: 80px 0 48px;
  text-align: center;
}

.gallery-hero__title {
  font-family: var(--font-title);
  font-size: var(--font-size-h1);
  color: var(--color-text);
  margin-bottom: 16px;
}

.gallery-hero__sub {
  color: var(--color-text-muted);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;
}

.legal {
  padding: 0 0 100px;
  background: var(--color-bg);
}

.legal__inner {
  max-width: 720px;
  margin: 0 auto;
}

.legal__block {
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--color-border);
}

.legal__block:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.legal__h2 {
  font-family: var(--font-title);
  font-size: var(--font-size-md);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 16px;
}

.legal__block p {
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: 14px;
}

.legal__block p:last-child {
  margin-bottom: 0;
}

.legal__list {
  margin: 12px 0 16px;
  padding-left: 1.25rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

.legal__list li {
  margin-bottom: 6px;
}

.legal__block strong {
  color: var(--color-text);
  font-weight: 600;
}
</style>
