<template>
  <section class="contact-section" id="contact" aria-labelledby="contact-heading">
    <div class="contact-inner">

      <div class="contact-left reveal-left">
        <h2 id="contact-heading">
          {{ t('contact.heading1') }}<br>
          <em>{{ t('contact.headingEm') }}</em><br>
          <span class="outline">{{ t('contact.headingOutline') }}</span>
        </h2>
        <p>{{ t('contact.desc') }}</p>
      </div>

      <div class="contact-links reveal">
        <a
          href="mailto:yamila.lemos@protonmail.com"
          class="contact-link"
          :aria-label="'Email: yamila.lemos@protonmail.com — ' + t('contact.emailSub')"
        >
          <div class="contact-icon" aria-hidden="true">@</div>
          <div class="contact-info">
            <strong>yamila.lemos@protonmail.com</strong>
            <span>{{ t('contact.emailSub') }}</span>
          </div>
          <span class="contact-arrow" aria-hidden="true">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yamila-lemos-product-scrum/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
          :aria-label="'LinkedIn: Yamila Lemos — ' + t('contact.linkedinSub') + ' (opens in new tab)'"
        >
          <div class="contact-icon" aria-hidden="true" style="font-weight:700;font-size:0.8rem;letter-spacing:-0.02em;">in</div>
          <div class="contact-info">
            <strong>Yamila Lemos</strong>
            <span>{{ t('contact.linkedinSub') }}</span>
          </div>
          <span class="contact-arrow" aria-hidden="true">→</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.contact-section {
  background: var(--cream);
  padding: 7rem 3rem;
}
.contact-inner {
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: center;
}
.contact-left h2 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.95; letter-spacing: -0.035em;
  color: var(--ink); margin-bottom: 2rem;
}
.contact-left h2 em { color: var(--orange); font-style: italic; }
.contact-left h2 .outline {
  -webkit-text-stroke: 1px var(--sand-l);
  color: transparent; display: block;
}
.contact-left p {
  font-size: 0.95rem; color: var(--text-s);
  line-height: 1.85; max-width: 380px;
}
.contact-links { display: flex; flex-direction: column; gap: 1rem; }
.contact-link {
  display: flex; align-items: center; gap: 1.2rem;
  padding: 1.4rem 1.6rem;
  border: 1px solid var(--sand-l); border-radius: var(--r);
  text-decoration: none; color: var(--ink);
  background: var(--white);
  font-size: 0.9rem;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
  /* min-height 44px guaranteed by padding */
}
.contact-link:hover, .contact-link:focus-visible {
  border-color: var(--orange);
  background: var(--orange-p);
  transform: translateX(4px);
}
.contact-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: var(--cream-2); border-radius: var(--r);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; color: var(--ink-3);
  transition: background 0.2s, color 0.2s;
}
.contact-link:hover .contact-icon,
.contact-link:focus-visible .contact-icon { background: var(--orange); color: var(--white); }
.contact-info { flex: 1; }
.contact-info strong { display: block; font-weight: 500; margin-bottom: 0.2rem; }
.contact-info span { font-size: 0.75rem; color: var(--sand); }
.contact-arrow { color: var(--sand-l); font-size: 1rem; transition: color 0.2s; }
.contact-link:hover .contact-arrow,
.contact-link:focus-visible .contact-arrow { color: var(--orange); }

@media (max-width: 900px) {
  .contact-section { padding: 5rem 1.5rem; }
  .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
