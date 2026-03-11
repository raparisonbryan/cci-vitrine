<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppButton from '@/components/AppButton.vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

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
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Nos espaces', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" @click="closeMobileMenu">
        <span class="navbar__logo-text">CCI</span>
        <span class="navbar__logo-sub">Ivato</span>
      </a>

      <nav class="navbar__nav" :class="{ 'navbar__nav--open': mobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="navbar__link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <AppButton href="#contact" variant="primary" @click="closeMobileMenu"> Réserver </AppButton>
      </nav>

      <button
        class="navbar__burger"
        :class="{ 'navbar__burger--active': mobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
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
  display: flex;
  align-items: baseline;
  gap: 6px;
  z-index: 10;
}

.navbar__logo-text {
  font-size: var(--font-size-lg);
  font-weight: 800;
  color: var(--color-primary);
}

.navbar__logo-sub {
  font-weight: 500;
  color: var(--color-text-muted);
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
  transform: translateY(7px) rotate(45deg);
}

.navbar__burger--active span:nth-child(2) {
  opacity: 0;
}

.navbar__burger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .navbar__burger {
    display: flex;
  }

  .navbar__nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .navbar__nav--open {
    opacity: 1;
    pointer-events: all;
  }

  .navbar__nav .navbar__link {
    color: var(--color-text);
  }
}
</style>
