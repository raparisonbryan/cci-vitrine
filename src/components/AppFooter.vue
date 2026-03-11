<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '#hero' },
      { label: 'À propos', href: '#about' },
      { label: 'Nos espaces', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Conférences', href: '#services' },
      { label: 'Séminaires', href: '#services' },
      { label: 'Événements', href: '#services' },
      { label: 'Réceptions', href: '#services' },
    ],
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="footer__logo-text">CCI</span>
            <span class="footer__logo-sub">Ivato</span>
          </div>
          <p class="footer__desc">
            Centre de Conférences International d'Ivato — votre espace privilégié pour des
            événements d'exception à Madagascar.
          </p>
        </div>

        <div v-for="group in footerLinks" :key="group.title" class="footer__col">
          <h4 class="footer__col-title">{{ group.title }}</h4>
          <ul class="footer__list">
            <li v-for="link in group.links" :key="link.label">
              <a :href="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Contact</h4>
          <ul class="footer__list">
            <li class="footer__info">Ivato, Antananarivo</li>
            <li class="footer__info">Madagascar</li>
            <li>
              <a href="mailto:contact@cci-ivato.mg" class="footer__link">contact@cci-ivato.mg</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ currentYear }} CCI Ivato. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-text);
  color: #fff;
  padding: 80px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer__logo {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 16px;
}

.footer__logo-text {
  font-size: var(--font-size-lg);
  font-weight: 800;
  color: #fff;
}

.footer__logo-sub {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
}

.footer__desc {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.6);
  max-width: 300px;
}

.footer__col-title {
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
}

.footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.55);
  transition: color var(--transition);
}

.footer__link:hover {
  color: #fff;
}

.footer__info {
  color: rgba(255, 255, 255, 0.55);
}

.footer__bottom {
  margin-top: 60px;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer__bottom p {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
