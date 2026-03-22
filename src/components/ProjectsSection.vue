<template>
  <section id="projects" aria-labelledby="projects-heading">
    <!-- Eyebrow -->
    <div class="section-eyebrow">
      <span class="eyebrow-num" aria-hidden="true">01</span>
      <div class="eyebrow-line" role="presentation"></div>
      <h2 id="projects-heading" class="eyebrow-title">{{ t('projects.sectionLabel') }}</h2>
    </div>

    <div class="projects-outer">

      <!-- PROJECT 1: AutoShop -->
      <article class="proj-featured reveal">
        <div class="proj-body">
          <div>
            <span class="proj-num" aria-hidden="true">01</span>
            <span class="proj-tag">{{ t('projects.p1.tag') }}</span>
            <h3 class="proj-title">{{ t('projects.p1.title') }}</h3>
            <p class="proj-type">{{ t('projects.p1.type') }}</p>
            <p class="proj-desc">{{ t('projects.p1.desc') }}</p>
            <ul class="proj-pills" aria-label="Tools">
              <li v-for="pill in ['Figma','User Testing','Analytics','A/B Testing','Design System']" :key="pill" class="proj-pill">{{ pill }}</li>
            </ul>
          </div>
          <div class="proj-link-row">
            <a href="#autoshop" class="proj-link-text" :aria-label="t('projects.viewCase') + ': ' + t('projects.p1.title')">
              {{ t('projects.viewCase') }}
            </a>
            <span class="proj-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
        <div class="proj-visual" role="img" :aria-label="t('projects.p1.title') + ' — mockup'">
          <AutoshopMockup />
        </div>
      </article>

      <!-- ROW: Bolsillo + ConsorcioBsAs -->
      <div class="proj-row">

        <article class="proj-card-sm reveal reveal-delay-1">
          <div class="proj-body">
            <span class="proj-num" aria-hidden="true">02</span>
            <span class="proj-tag">{{ t('projects.p2.tag') }}</span>
            <h3 class="proj-title">{{ t('projects.p2.title') }}</h3>
            <p class="proj-type">{{ t('projects.p2.type') }}</p>
            <p class="proj-desc">{{ t('projects.p2.desc') }}</p>
            <ul class="proj-pills" aria-label="Tools">
              <li v-for="pill in ['Co-diseño','Adolescentes','Prevención']" :key="pill" class="proj-pill">{{ pill }}</li>
            </ul>
            <div class="proj-link-row">
              <a href="#bolsillo" class="proj-link-text" :aria-label="t('projects.viewCaseShort') + ': ' + t('projects.p2.title')">
                {{ t('projects.viewCaseShort') }}
              </a>
              <span class="proj-arrow" aria-hidden="true">↗</span>
            </div>
          </div>
          <div class="proj-visual dark-visual" role="img" :aria-label="t('projects.p2.title') + ' — mockup'">
            <BolsilloMockup />
          </div>
        </article>

        <article class="proj-card-sm reveal reveal-delay-2">
          <div class="proj-body">
            <span class="proj-num" aria-hidden="true">03</span>
            <span class="proj-tag">{{ t('projects.p3.tag') }}</span>
            <h3 class="proj-title">{{ t('projects.p3.title') }}</h3>
            <p class="proj-type">{{ t('projects.p3.type') }}</p>
            <p class="proj-desc">{{ t('projects.p3.desc') }}</p>
            <ul class="proj-pills" aria-label="Tools">
              <li v-for="pill in ['Mapas','Reviews','Transparencia']" :key="pill" class="proj-pill">{{ pill }}</li>
            </ul>
            <div class="proj-link-row">
              <a href="#consorcio" class="proj-link-text" :aria-label="t('projects.viewCaseShort') + ': ' + t('projects.p3.title')">
                {{ t('projects.viewCaseShort') }}
              </a>
              <span class="proj-arrow" aria-hidden="true">↗</span>
            </div>
          </div>
          <div class="proj-visual map-visual" role="img" :aria-label="t('projects.p3.title') + ' — mockup'">
            <ConsorcionMockup />
          </div>
        </article>

      </div>

      <!-- PROJECT 4: RepúblicaData -->
      <article class="proj-featured dark reveal">
        <div class="proj-body">
          <div>
            <span class="proj-num" aria-hidden="true">04</span>
            <span class="proj-tag">{{ t('projects.p4.tag') }}</span>
            <h3 class="proj-title">{{ t('projects.p4.title') }}</h3>
            <p class="proj-type">{{ t('projects.p4.type') }}</p>
            <p class="proj-desc">{{ t('projects.p4.desc1') }}</p>
            <p class="proj-desc" style="margin-top:-0.4rem">{{ t('projects.p4.desc2') }}</p>
            <ul class="proj-pills" aria-label="Tools">
              <li v-for="pill in ['Big Data','GovTech','Data Viz','Participación','Argentina']" :key="pill" class="proj-pill">{{ pill }}</li>
            </ul>
          </div>
          <div class="proj-link-row">
            <a href="#republica" class="proj-link-text" :aria-label="t('projects.viewCase') + ': ' + t('projects.p4.title')">
              {{ t('projects.viewCase') }}
            </a>
            <span class="proj-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
        <div class="proj-visual" style="background:#0D0A07;min-height:400px" role="img" :aria-label="t('projects.p4.title') + ' — dashboard mockup'">
          <RepublicaMockup />
        </div>
      </article>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AutoshopMockup from './mockups/AutoshopMockup.vue'
import BolsilloMockup from './mockups/BolsilloMockup.vue'
import ConsorcionMockup from './mockups/ConsorcionMockup.vue'
import RepublicaMockup from './mockups/RepublicaMockup.vue'

const { t } = useI18n()
</script>

<style scoped>
.section-eyebrow {
  max-width: 1100px; margin: 0 auto;
  padding: 5rem 3rem 2rem;
  display: flex; align-items: center; gap: 1.5rem;
}
.eyebrow-num { font-family: 'DM Serif Display', serif; font-size: 0.8rem; font-style: italic; color: var(--orange); opacity: 0.8; }
.eyebrow-line { flex: 1; height: 1px; background: var(--sand-l); }
.eyebrow-title { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sand); }

.projects-outer { padding: 0 3rem 6rem; max-width: 1100px; margin: 0 auto; }

.proj-featured {
  display: grid; grid-template-columns: 1.1fr 0.9fr;
  border: 1px solid var(--sand-l); border-radius: 4px;
  overflow: hidden; margin-bottom: 1.5rem;
  background: var(--white);
  transition: box-shadow 0.3s;
}
.proj-featured:hover { box-shadow: 0 12px 48px rgba(13,10,7,0.1); }

.proj-body { padding: 3.5rem 3rem; display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; }
.proj-num {
  font-family: 'DM Serif Display', serif;
  font-size: 5rem; line-height: 1; letter-spacing: -0.04em;
  display: block;
  color: transparent;
  -webkit-text-stroke: 1px var(--sand-l);
  user-select: none;
}
.proj-tag {
  font-size: 0.68rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--orange);
  display: flex; align-items: center; gap: 0.6rem;
  margin-bottom: 0.5rem;
}
.proj-tag::before { content: ''; width: 12px; height: 1px; background: var(--orange); flex-shrink: 0; }
.proj-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.1; letter-spacing: -0.025em;
  color: var(--ink); margin: 0.5rem 0 0.8rem;
}
.proj-type { font-size: 0.73rem; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase; color: var(--sand); margin-bottom: 0.8rem; }
.proj-desc { font-size: 0.9rem; color: var(--text-s); line-height: 1.8; margin-bottom: 1rem; }
.proj-pills { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; }
.proj-pill {
  font-size: 0.65rem; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
  padding: 0.28rem 0.7rem; background: var(--cream-2); color: var(--ink-3); border-radius: var(--r);
}
.proj-link-row { display: flex; align-items: center; justify-content: space-between; padding-top: 1.5rem; border-top: 1px solid var(--sand-l); }
.proj-link-text {
  font-size: 0.8rem; font-weight: 500; color: var(--orange); letter-spacing: 0.02em;
  text-decoration: none;
}
.proj-link-text:hover, .proj-link-text:focus-visible { text-decoration: underline; }
.proj-arrow {
  width: 36px; height: 36px;
  border: 1px solid var(--sand-l); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; color: var(--ink);
  transition: transform 0.2s, border-color 0.2s, color 0.2s;
}
.proj-featured:hover .proj-arrow { border-color: var(--orange); color: var(--orange); transform: translate(2px,-2px); }

.proj-visual {
  position: relative; overflow: hidden; background: var(--cream-2);
  min-height: 380px; display: flex; align-items: center; justify-content: center;
}
.proj-visual svg { width: 100%; height: 100%; }

/* Dark card variant */
.proj-featured.dark { background: var(--ink-2); border-color: rgba(255,255,255,0.07); }
.proj-featured.dark .proj-title { color: var(--cream); }
.proj-featured.dark .proj-desc { color: rgba(248,244,239,0.5); }
.proj-featured.dark .proj-type { color: rgba(168,139,115,0.7); }
.proj-featured.dark .proj-pill { background: rgba(255,255,255,0.06); color: rgba(248,244,239,0.6); }
.proj-featured.dark .proj-link-row { border-color: rgba(255,255,255,0.08); }
.proj-featured.dark .proj-num { -webkit-text-stroke-color: rgba(255,255,255,0.06); }
.proj-featured.dark .proj-arrow { border-color: rgba(255,255,255,0.15); color: var(--cream); }
.proj-featured.dark:hover .proj-arrow { border-color: var(--orange); color: var(--orange); }

/* Two-col row */
.proj-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.proj-card-sm {
  background: var(--white); border: 1px solid var(--sand-l); border-radius: 4px;
  overflow: hidden; display: flex; flex-direction: column;
  transition: box-shadow 0.3s;
}
.proj-card-sm:hover { box-shadow: 0 12px 48px rgba(13,10,7,0.1); }
.proj-card-sm .proj-body { padding: 2.5rem 2.5rem 1.5rem; }
.proj-card-sm .proj-visual { min-height: 220px; }
.dark-visual { background: #1C1610 !important; }
.map-visual  { background: #E4DDD3 !important; }

@media (max-width: 900px) {
  .section-eyebrow { padding: 4rem 1.5rem 2rem; }
  .projects-outer { padding: 0 1.5rem 4rem; }
  .proj-featured { grid-template-columns: 1fr; }
  .proj-visual { min-height: 240px; order: -1; }
  .proj-row { grid-template-columns: 1fr; }
}
</style>
