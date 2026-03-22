<template>
  <section class="about" id="about" aria-labelledby="about-heading">
    <div class="about-left reveal-left">
      <blockquote class="about-quote" cite="#">
        "{{ t('about.quote') }}"
      </blockquote>
      <p class="about-sub">{{ t('about.sub') }}</p>
    </div>

    <div class="about-right reveal">
      <!-- Stats -->
      <div class="about-track" role="list" :aria-label="locale === 'es' ? 'Años de experiencia' : 'Years of experience'">
        <div class="about-stat" role="listitem">
          <span class="about-stat-n" aria-label="4 años">4yr</span>
          <span class="about-stat-l">{{ t('about.statDev') }}</span>
        </div>
        <div class="about-stat" role="listitem">
          <span class="about-stat-n" aria-label="5 años">5yr</span>
          <span class="about-stat-l">{{ t('about.statPM') }}</span>
        </div>
        <div class="about-stat" role="listitem">
          <span class="about-stat-n" aria-label="más de 1 año">1yr+</span>
          <span class="about-stat-l">{{ t('about.statUX') }}</span>
        </div>
      </div>

      <!-- Bio -->
      <h2 id="about-heading" class="sr-only">{{ t('about.sectionLabel') }}</h2>
      <div class="about-bio">
        <p>
          {{ locale === 'es' ? 'Arranqué como' : 'I started as a' }}
          <strong>{{ t('about.bio1Strong') }}</strong>
          {{ locale === 'es'
            ? 'en el ecosistema JS — una base concreta para saber qué es técnicamente posible. Eso cambió cómo diseño: sin wishful thinking.'
            : "in the JS ecosystem — a concrete foundation for knowing what's technically possible. That changed how I design: no wishful thinking."
          }}
        </p>
        <p>
          {{ locale === 'es' ? 'Cinco años de' : 'Five years of' }}
          <strong>{{ t('about.bio2Strong') }}</strong>
          {{ locale === 'es'
            ? 'me enseñaron a leer organizaciones, manejar tradeoffs reales y hacer que las cosas lleguen a producción.'
            : 'taught me how to read organizations, handle real tradeoffs and actually ship things.'
          }}
        </p>
        <p>
          {{ locale === 'es' ? 'Hoy me dedico de lleno a' : "Now I'm fully focused on" }}
          <strong>{{ t('about.bio3Strong') }}</strong>
          {{ locale === 'es'
            ? ', y es donde todo eso se potencia.'
            : '— and that\'s where everything compounds.'
          }}
        </p>
      </div>

      <!-- Hobbies -->
      <ul class="about-hobbies" :aria-label="locale === 'es' ? 'Intereses personales' : 'Personal interests'">
        <li v-for="h in t('about.hobbies')" :key="h" class="hobby-chip">{{ h }}</li>
        <li class="hobby-chip accent">{{ t('about.hobbyAccent') }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style scoped>
/* Visually hidden but accessible to screen readers */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

.about {
  display: grid; grid-template-columns: 1fr 1fr;
  min-height: 80vh;
}
.about-left {
  background: var(--ink-2);
  padding: 6rem 4rem;
  display: flex; flex-direction: column; justify-content: center;
  position: relative; overflow: hidden;
}
.about-left::after {
  content: 'YL';
  position: absolute; bottom: -2rem; right: -1rem;
  font-family: 'DM Serif Display', serif;
  font-size: 14rem; line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(201,106,60,0.12);
  pointer-events: none; user-select: none;
  aria-hidden: true;
}
.about-quote {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.2; letter-spacing: -0.025em;
  color: var(--cream); margin-bottom: 2rem;
  border: none; padding: 0;
}
.about-sub {
  font-size: 0.88rem;
  color: rgba(248,244,239,0.4);
  line-height: 1.75; max-width: 340px;
}
.about-right {
  background: var(--cream);
  padding: 6rem 4rem;
  display: flex; flex-direction: column; justify-content: center; gap: 2rem;
}
.about-track {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 1px; background: var(--sand-l);
  border: 1px solid var(--sand-l);
  border-radius: var(--r); overflow: hidden;
}
.about-stat {
  background: var(--white); padding: 1.4rem 1.2rem; text-align: center;
  display: flex; flex-direction: column; gap: 0.3rem;
}
.about-stat-n {
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem; color: var(--ink); display: block; line-height: 1;
}
.about-stat-l { font-size: 0.7rem; color: var(--sand); letter-spacing: 0.05em; text-transform: uppercase; }
.about-bio { display: flex; flex-direction: column; gap: 0.9rem; }
.about-bio p { font-size: 0.95rem; color: var(--text-s); line-height: 1.85; }
.about-bio strong { color: var(--ink); font-weight: 500; }
.about-hobbies {
  list-style: none;
  display: flex; flex-wrap: wrap; gap: 0.5rem;
  padding-top: 0.5rem; border-top: 1px solid var(--sand-l);
}
.hobby-chip {
  font-size: 0.72rem; padding: 0.35rem 0.85rem;
  border: 1px solid var(--sand-l); border-radius: 99px;
  color: var(--text-s); background: var(--white);
}
.hobby-chip.accent {
  background: var(--orange-p);
  border-color: rgba(201,106,60,0.3); color: var(--ink-3);
}

@media (max-width: 900px) {
  .about { grid-template-columns: 1fr; }
  .about-left { padding: 4rem 2rem; min-height: 300px; }
  .about-right { padding: 3rem 2rem; }
}
</style>
