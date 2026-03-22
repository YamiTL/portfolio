<template>
  <header>
    <nav
      :class="['site-nav', { scrolled: isScrolled }]"
      role="navigation"
      :aria-label="t('nav.about') + ' navigation'"
    >
      <a href="#" class="nav-logo" :aria-label="'Yamila Lemos — ' + t('nav.about')">
        Yami Lemos
      </a>

      <!-- Desktop links -->
      <div class="nav-links" role="list">
        <a href="#about" role="listitem">{{ t('nav.about') }}</a>
        <a href="#projects" role="listitem">{{ t('nav.projects') }}</a>
        <a href="#process" role="listitem">{{ t('nav.process') }}</a>
        <a href="#contact" class="nav-cta" role="listitem">{{ t('nav.contact') }}</a>

        <!-- Language toggle -->
        <button
          class="lang-toggle"
          @click="toggleLang"
          :aria-label="t('nav.langAriaLabel')"
          :aria-pressed="locale === 'en'"
        >
          {{ t('nav.langToggle') }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isScrolled = ref(false)

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  document.documentElement.lang = locale.value
}

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: 56px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3rem;
  transition: background 0.4s, border-color 0.4s;
}
.site-nav.scrolled {
  background: rgba(248,244,239,0.94);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--sand-l);
}
.nav-logo {
  font-family: 'DM Serif Display', serif;
  font-size: 1.05rem;
  font-style: italic;
  letter-spacing: -0.01em;
  text-decoration: none;
  color: var(--cream);
  transition: color 0.4s;
  min-height: 44px;
}
.site-nav.scrolled .nav-logo { color: var(--ink); }
.nav-links {
  display: flex; gap: 2rem; align-items: center;
}
.nav-links a {
  font-size: 0.78rem; font-weight: 400;
  letter-spacing: 0.06em; text-transform: uppercase;
  text-decoration: none;
  color: rgba(248,244,239,0.6);
  transition: color 0.2s;
  padding: 0.25rem 0;
  min-height: 44px;
}
.site-nav.scrolled .nav-links a { color: var(--text-s); }
.nav-links a:hover,
.nav-links a:focus-visible { color: var(--orange); }
.nav-cta {
  padding: 0.5rem 1.1rem !important;
  border: 1px solid rgba(248,244,239,0.3);
  border-radius: var(--r);
  color: var(--cream) !important;
  transition: border-color 0.2s, background 0.2s, color 0.2s !important;
}
.site-nav.scrolled .nav-cta {
  border-color: var(--orange);
  color: var(--orange) !important;
}
.nav-cta:hover, .nav-cta:focus-visible {
  background: var(--orange);
  color: var(--cream) !important;
  border-color: var(--orange) !important;
}

/* Language toggle button */
.lang-toggle {
  background: transparent;
  border: 1px solid rgba(248,244,239,0.2);
  color: rgba(248,244,239,0.5);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: var(--r);
  cursor: pointer;
  min-height: 44px;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.site-nav.scrolled .lang-toggle {
  border-color: var(--sand-l);
  color: var(--text-s);
}
.lang-toggle:hover, .lang-toggle:focus-visible {
  border-color: var(--orange);
  color: var(--orange);
  background: var(--orange-p);
}

@media (max-width: 768px) {
  .site-nav { padding: 0 1.2rem; }
  .nav-links { gap: 1rem; }
  .nav-links a[href="#about"],
  .nav-links a[href="#process"] { display: none; }
}
</style>
