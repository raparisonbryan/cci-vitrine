<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppButton from '@/components/AppButton.vue'
import { Calendar } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const burgerDark = computed(() => scrolled.value || mobileMenuOpen.value)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { label: 'À propos', href: '#about' },
  { label: 'Espaces', href: '#services' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" @click="closeMobileMenu">
        <img
          v-if="scrolled"
          src="../assets/cci_logo.png"
          alt="CCI Ivato"
          class="navbar__logo-img"
        />
        <img v-else src="../assets/cci_logo_white.png" alt="CCI Ivato" class="navbar__logo-img" />
      </a>

      <!-- menu desktop -->
      <nav class="navbar__nav navbar__nav--desktop">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <AppButton href="#contact" variant="primary" @click="closeMobileMenu">
          Réserver
          <Calendar class="icon" />
        </AppButton>
      </nav>

      <!-- menu mobile -->
      <Teleport to="body">
        <nav class="navbar__nav--mobile" :class="{ 'navbar__nav--mobile-open': mobileMenuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="mobile-link"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <AppButton href="#contact" variant="primary" @click="closeMobileMenu">
            Réserver
            <Calendar class="icon" />
          </AppButton>
        </nav>
      </Teleport>

      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--active': mobileMenuOpen, 'navbar__burger--dark': burgerDark }"
        @click="toggleMobileMenu"
        aria-label="Menu"
      >
        <span /><span />
      </button>
    </div>
  </header>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  height: 80px;
}

.navbar__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar__link {
  font-weight: 500;
  color: var(--color-text);
  transition: color var(--transition);
  position: relative;
}

.navbar--scrolled .navbar__link {
  color: var(--color-text);
}

.navbar:not(.navbar--scrolled) .navbar__link {
  color: #fff;
}

.navbar:not(.navbar--scrolled) .navbar__logo-text {
  color: #fff;
}

.navbar:not(.navbar--scrolled) .navbar__logo-sub {
  color: rgba(255, 255, 255, 0.7);
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar:not(.navbar--scrolled) .navbar__link::after {
  background: #fff;
}

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 10;
}

.navbar__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.navbar:not(.navbar--scrolled) .navbar__burger span {
  background: #fff;
}

.navbar__burger--active span:nth-child(1) {
  transform: translateY(3.5px) rotate(45deg);
}

.navbar__burger--active span:nth-child(2) {
  transform: translateY(-3.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar__burger {
    display: flex;
    z-index: 1001;
  }

  .navbar__burger span {
    background: #fff;
  }

  .navbar__burger--dark span,
  .navbar:not(.navbar--scrolled) .navbar__burger--dark span {
    background: var(--color-text);
  }

  .navbar__nav--desktop {
    display: none;
  }
}

/* menu mobile */
.navbar__nav--mobile {
  display: none;
}

@media (max-width: 768px) {
  .navbar__nav--mobile {
    display: flex;
    position: fixed;
    inset: 0;
    background: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  .navbar__nav--mobile-open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  .mobile-link {
    font-size: var(--font-size-lg);
    font-weight: 500;
    color: var(--color-text);
    position: relative;
    text-decoration: none;
  }

  .mobile-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.25s ease;
  }

  .mobile-link:hover::after {
    width: 100%;
  }
}
</style>
