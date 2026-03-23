<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppButton from '@/components/AppButton.vue'
import {
  Calendar,
  ChevronDown,
  Mic,
  LayoutGrid,
  Wine,
  Briefcase,
  UtensilsCrossed,
  Car,
} from 'lucide-vue-next'
import { spacesList } from '@/data/spaces'

const spaceIcons: Record<string, ReturnType<typeof Mic>> = {
  conferences: Mic,
  exposition: LayoutGrid,
  banquets: Wine,
  bureaux: Briefcase,
  restaurants: UtensilsCrossed,
  parking: Car,
}

const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const spacesOpen = ref(false)
const isTransparent = computed(
  () => (route.path === '/' || route.meta.transparentNav) && !scrolled.value,
)
const burgerDark = computed(() => !isTransparent.value || mobileMenuOpen.value)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
  spacesOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="navbar" :class="{ 'navbar--scrolled': !isTransparent }">
    <div class="container navbar__inner">
      <div class="navbar__logo-container">
        <a href="/" class="navbar__logo" @click="closeMobileMenu">
          <img
            v-if="isTransparent"
            src="../assets/cci_logo_white.png"
            alt="CCI Ivato"
            class="navbar__logo-img"
          />
          <img v-else src="../assets/cci_logo.png" alt="CCI Ivato" class="navbar__logo-img" />
        </a>
        <img class="navbar__logo-madeco" src="../assets/logo-MADECO_SA.png" alt="MADECO SA" />
      </div>

      <!-- menu desktop -->
      <nav class="navbar__nav navbar__nav--desktop">
        <a href="/" class="navbar__link">Accueil</a>

        <a href="/a-propos" class="navbar__link">À propos</a>

        <div class="navbar__dropdown">
          <span class="navbar__link navbar__link--dropdown">
            Espaces
            <ChevronDown class="navbar__chevron" />
          </span>
          <div class="navbar__dropdown-menu">
            <a
              v-for="space in spacesList"
              :key="space.slug"
              :href="`/espaces/${space.slug}`"
              class="navbar__dropdown-link"
            >
              <div class="navbar__dropdown-icon_wrapper">
                <component :is="spaceIcons[space.slug]" class="navbar__dropdown-icon" />
              </div>
              <div class="navbar__dropdown-text">
                <span>{{ space.name }}</span>
              </div>
            </a>
          </div>
        </div>

        <a href="/galerie" class="navbar__link">Galerie</a>

        <AppButton href="#contact" variant="primary">
          Réserver
          <Calendar class="icon" />
        </AppButton>
      </nav>

      <!-- menu mobile -->
      <Teleport to="body">
        <nav class="navbar__nav--mobile" :class="{ 'navbar__nav--mobile-open': mobileMenuOpen }">
          <a href="/" class="mobile-link" @click="closeMobileMenu">Accueil</a>

          <a href="/a-propos" class="mobile-link" @click="closeMobileMenu">À propos</a>

          <button
            class="mobile-link mobile-link--toggle"
            type="button"
            @click="spacesOpen = !spacesOpen"
          >
            Espaces
            <ChevronDown class="mobile-chevron" :class="{ 'mobile-chevron--open': spacesOpen }" />
          </button>
          <div class="mobile-spaces" :class="{ 'mobile-spaces--open': spacesOpen }">
            <a
              v-for="space in spacesList"
              :key="space.slug"
              :href="`/espaces/${space.slug}`"
              class="mobile-spaces__link"
              @click="closeMobileMenu"
            >
              {{ space.name }}
            </a>
          </div>

          <a href="/galerie" class="mobile-link" @click="closeMobileMenu">Galerie</a>

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

.navbar__logo-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.navbar__logo {
  height: 80px;
}

.navbar__logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.navbar__logo-madeco {
  height: 60px;
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

/* Dropdown – desktop */
.navbar__link--dropdown {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.navbar__chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
}

.navbar__dropdown {
  position: relative;
}

.navbar__dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  min-width: 260px;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  padding: 8px;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.navbar__dropdown-menu::before {
  content: '';
  position: absolute;
  top: -16px;
  left: 0;
  right: 0;
  height: 16px;
}

.navbar__dropdown:hover .navbar__dropdown-menu {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.navbar__dropdown:hover .navbar__chevron {
  transform: rotate(180deg);
}

.navbar__dropdown-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px 10px 4px;
  border-radius: var(--radius);
  color: var(--color-text);
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all 0.15s ease;
}

.navbar__dropdown-link:hover {
  background: var(--color-bg-subtle);
  color: var(--color-primary);
}

.navbar__dropdown-icon_wrapper {
  background: var(--color-bg-subtle);
  padding: 8px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__dropdown-icon {
  width: 18px;
  height: 18px;
  color: var(--color-text-muted);
  flex-shrink: 0;
  transition: color 0.15s ease;
}

.navbar__dropdown-link:hover .navbar__dropdown-icon {
  color: var(--color-primary);
}

.navbar__dropdown-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.navbar__dropdown-rooms {
  font-size: var(--font-size-xs);
  font-weight: 400;
  color: var(--color-text-muted);
}

.navbar__dropdown-link:hover .navbar__dropdown-rooms {
  color: var(--color-secondary);
}

/* Burger */
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

/* Menu mobile */
.navbar__nav--mobile {
  display: none;
}

@media (max-width: 1024px) {
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

  .navbar__nav--mobile {
    display: flex;
    position: fixed;
    inset: 0;
    background: #fff;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
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
    margin-bottom: 24px;
    font-size: var(--font-size-lg);
    font-weight: 500;
    color: var(--color-text);
    position: relative;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-family);
  }

  .mobile-link--toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .mobile-chevron {
    width: 18px;
    height: 18px;
    color: var(--color-text-muted);
    transition: transform 0.25s ease;
  }

  .mobile-chevron--open {
    transform: rotate(180deg);
  }

  .mobile-spaces {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .mobile-spaces--open {
    max-height: 400px;
    padding-bottom: 24px;
  }

  .mobile-spaces__link {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    font-weight: 500;
    transition: color 0.2s ease;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }

  .mobile-spaces__link:hover {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    .navbar__logo-madeco {
      display: none;
    }
  }
}
</style>
