<template>
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <p>{{ t('footer.copy') }}</p>
      <nav class="footer-nav" :aria-label="locale === 'es' ? 'Links del footer' : 'Footer links'">
        <a href="mailto:yamila.lemos@protonmail.com">yamila.lemos@protonmail.com</a>
        <span aria-hidden="true">·</span>
        <a
          href="https://www.linkedin.com/in/yamila-lemos-product-scrum/"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="'LinkedIn' + (locale === 'es' ? ' (se abre en nueva pestaña)' : ' (opens in new tab)')"
        >LinkedIn</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<style scoped>
.site-footer {
  background: var(--ink);
  padding: 1.8rem 3rem;
}
.footer-inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center;
  gap: 1rem; flex-wrap: wrap;
}
.site-footer p {
  font-size: 0.72rem;
  color: rgba(248,244,239,0.25);
  letter-spacing: 0.04em;
}
.footer-nav {
  display: flex; gap: 0.75rem; align-items: center;
}
.footer-nav span {
  color: rgba(248,244,239,0.15);
  font-size: 0.72rem;
}
.footer-nav a {
  font-size: 0.72rem;
  color: var(--orange);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  min-height: 44px; display: inline-flex; align-items: center;
}
.footer-nav a:hover,
.footer-nav a:focus-visible { opacity: 1; }

@media (max-width: 600px) {
  .site-footer { padding: 1.5rem; }
  .footer-inner { flex-direction: column; text-align: center; gap: 0.5rem; }
}
</style>
