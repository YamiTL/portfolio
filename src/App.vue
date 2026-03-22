<template>
  <div :lang="locale" @mousemove="onMouseMove">
    <!-- Custom cursor (hidden on touch devices via CSS) -->
    <div class="cursor" ref="cursorEl" aria-hidden="true"></div>
    <div class="cursor-ring" ref="cursorRingEl" aria-hidden="true"></div>

    <!-- Skip link for keyboard navigation -->
    <a href="#main-content" class="skip-link">
      {{ locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content' }}
    </a>

    <NavBar />

    <main id="main-content">
      <HeroSection />
      <MarqueeBar />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBar from './components/MarqueeBar.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'

const { locale } = useI18n()

// Custom cursor
const cursorEl = ref(null)
const cursorRingEl = ref(null)
let mx = 0, my = 0, rx = 0, ry = 0
let rafId = null

function onMouseMove(e) {
  mx = e.clientX
  my = e.clientY
}

function animateCursor() {
  if (cursorEl.value) {
    cursorEl.value.style.left = mx + 'px'
    cursorEl.value.style.top  = my + 'px'
  }
  if (cursorRingEl.value) {
    rx += (mx - rx) * 0.12
    ry += (my - ry) * 0.12
    cursorRingEl.value.style.left = rx + 'px'
    cursorRingEl.value.style.top  = ry + 'px'
  }
  rafId = requestAnimationFrame(animateCursor)
}

// Scroll reveal with IntersectionObserver
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left')
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
    })
  }, { threshold: 0.12 })
  els.forEach(el => io.observe(el))
}

// Update html lang attribute for screen readers
function watchLang() {
  document.documentElement.lang = locale.value
}

onMounted(() => {
  animateCursor()
  initReveal()
  watchLang()
})
</script>
