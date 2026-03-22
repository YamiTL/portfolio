<template>
  <section class="process-section" id="process" aria-labelledby="process-heading">
    <div class="process-bg-text" aria-hidden="true">{{ locale === 'es' ? 'PROCESO' : 'PROCESS' }}</div>
    <div class="process-inner">
      <div class="process-head reveal">
        <h2 id="process-heading">
          {{ t('process.heading1') }}<br>
          <em>{{ t('process.heading2') }}</em>
        </h2>
        <p>{{ t('process.sub') }}</p>
      </div>

      <ol class="process-steps" :aria-label="t('process.sectionLabel')">
        <li
          v-for="(step, i) in t('process.steps')"
          :key="step.num"
          class="process-step reveal"
          :class="'reveal-delay-' + i"
        >
          <span class="step-num" aria-hidden="true">{{ step.num }}</span>
          <h3 class="step-name">{{ step.name }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style scoped>
.process-section {
  background: var(--ink);
  padding: 6rem 3rem;
  position: relative; overflow: hidden;
}
.process-bg-text {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'DM Serif Display', serif;
  font-size: clamp(8rem, 18vw, 16rem);
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.03);
  pointer-events: none; user-select: none;
  white-space: nowrap;
}
.process-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.process-head {
  display: flex; align-items: baseline; justify-content: space-between;
  margin-bottom: 4rem; gap: 2rem;
}
.process-head h2 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1; letter-spacing: -0.03em;
  color: var(--cream);
}
.process-head h2 em { color: var(--orange); font-style: italic; }
.process-head p {
  font-size: 0.85rem; color: rgba(248,244,239,0.35);
  max-width: 220px; line-height: 1.6; text-align: right;
}
.process-steps {
  list-style: none;
  display: grid; grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 4px; overflow: hidden;
}
.process-step {
  padding: 2.5rem 2rem;
  border-right: 1px solid rgba(255,255,255,0.07);
  transition: background 0.3s;
}
.process-step:last-child { border-right: none; }
.process-step:hover { background: rgba(201,106,60,0.06); }
.step-num {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem; line-height: 1; letter-spacing: -0.04em;
  display: block; margin-bottom: 1.5rem;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201,106,60,0.35);
  transition: -webkit-text-stroke-color 0.3s;
}
.process-step:hover .step-num { -webkit-text-stroke-color: var(--orange); }
.step-name {
  font-size: 0.95rem; font-weight: 500;
  color: var(--cream); margin-bottom: 0.7rem;
}
.step-desc {
  font-size: 0.82rem;
  color: rgba(248,244,239,0.4); line-height: 1.7;
}

@media (max-width: 900px) {
  .process-section { padding: 4rem 1.5rem; }
  .process-head { flex-direction: column; gap: 1rem; }
  .process-head p { text-align: left; max-width: 100%; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .process-step { border-bottom: 1px solid rgba(255,255,255,0.07); }
  .process-step:nth-child(even) { border-right: none; }
}
@media (max-width: 480px) {
  .process-steps { grid-template-columns: 1fr; }
  .process-step { border-right: none; }
}
</style>
