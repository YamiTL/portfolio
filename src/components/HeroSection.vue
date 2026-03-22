<template>
  <section
    class="hero"
    aria-labelledby="hero-heading"
  >
    <div class="hero-blob" aria-hidden="true"></div>

    <div class="hero-content">
      <p class="hero-label" aria-hidden="true">{{ t('hero.label') }}</p>

      <h1 id="hero-heading" class="hero-headline">
        <span class="outline">{{ t('hero.line1') }}</span>
        <em>{{ t('hero.line2') }}</em>
        {{ t('hero.line3') }}
      </h1>

      <div class="hero-bottom">
        <p class="hero-desc">
          {{ descStart }}
          <strong>{{ t('hero.devYears') }} {{ locale === 'es' ? 'años como fullstack dev' : 'years as a fullstack dev' }}</strong>,
          <strong>{{ t('hero.pmYears') }} {{ locale === 'es' ? 'en Agile delivery' : 'in Agile delivery' }}</strong>,
          {{ descEnd }}
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn-primary">
            {{ t('hero.cta') }} <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" class="btn-ghost">
            {{ t('hero.ctaSecondary') }} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero-scroll" aria-hidden="true">
      <div class="scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const descStart = computed(() => locale.value === 'es'
  ? 'PM y diseñadora UX/UI con base técnica —'
  : 'UX/UI designer & PM with a technical foundation —'
)
const descEnd = computed(() => locale.value === 'es'
  ? 'y hoy construyendo el puente real entre engineering, negocio y usuario.'
  : 'now building the real bridge between engineering, business and users.'
)
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: var(--ink);
  position: relative;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 0 3rem 5rem;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; inset: 0; z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.4;
  pointer-events: none;
}
.hero-blob {
  position: absolute; top: -120px; right: -80px; z-index: 1;
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(201,106,60,0.22) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.hero-content { position: relative; z-index: 2; max-width: 1060px; width: 100%; }
.hero-label {
  font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 2.5rem;
  display: flex; align-items: center; gap: 1rem;
  opacity: 0; animation: fadeUp 0.8s 0.2s ease forwards;
}
.hero-label::before {
  content: ''; display: block;
  width: 32px; height: 1px;
  background: var(--orange);
}
.hero-headline {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(4rem, 9vw, 8.5rem);
  line-height: 0.92;
  letter-spacing: -0.035em;
  color: var(--cream);
  margin-bottom: 3.5rem;
  opacity: 0; animation: fadeUp 0.9s 0.35s ease forwards;
}
.hero-headline em {
  font-style: italic; color: var(--orange); display: block;
}
.hero-headline .outline {
  -webkit-text-stroke: 1px rgba(248,244,239,0.25);
  color: transparent; display: block;
}
.hero-bottom {
  display: flex; align-items: flex-end; justify-content: space-between; gap: 3rem;
  opacity: 0; animation: fadeUp 0.9s 0.55s ease forwards;
}
.hero-desc {
  font-size: 1rem; line-height: 1.8;
  color: rgba(248,244,239,0.55); max-width: 400px;
}
.hero-desc strong { color: rgba(248,244,239,0.85); font-weight: 400; }
.hero-actions { display: flex; gap: 1rem; align-items: center; flex-shrink: 0; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--orange); color: var(--cream);
  text-decoration: none; font-size: 0.82rem; font-weight: 500;
  letter-spacing: 0.04em; text-transform: uppercase;
  padding: 0.85rem 1.8rem; border-radius: var(--r);
  border: 1px solid var(--orange);
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.btn-primary:hover, .btn-primary:focus-visible {
  background: transparent; color: var(--orange); transform: translateY(-2px);
}
.btn-ghost {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: transparent; color: rgba(248,244,239,0.5);
  text-decoration: none; font-size: 0.82rem;
  letter-spacing: 0.04em; text-transform: uppercase;
  padding: 0.85rem 0; border: none;
  transition: color 0.2s;
}
.btn-ghost:hover, .btn-ghost:focus-visible { color: var(--cream); }
.hero-scroll {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  z-index: 2;
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  opacity: 0; animation: fadeUp 1s 1s ease forwards;
}
.hero-scroll span { font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(248,244,239,0.3); }
.scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, rgba(248,244,239,0.3), transparent);
  animation: scrollPulse 2s 1.5s infinite;
}

@media (max-width: 768px) {
  .hero { padding: 0 1.5rem 4rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; }
}
</style>
