# Yami Lemos — Portfolio

Portfolio personal de UX/UI & Product Management. Construido con Vue 3 + Vite + vue-i18n. Bilingüe (ES/EN). Deploy automático a GitHub Pages via GitHub Actions.

---

## Stack

- **Vue 3** (Composition API + `<script setup>`)
- **Vite 5** (bundler)
- **vue-i18n 9** (traducciones ES/EN)
- **GitHub Actions** (CI/CD → GH Pages)

---

## Setup local

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en dev
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```

---

## Deploy a GitHub Pages

### Paso 1 — Crear el repositorio

1. Ir a [github.com/new](https://github.com/new)
2. Nombre del repo: `yami-portfolio` (o el que prefieras)
3. Visibilidad: **Public** (requerido para GH Pages gratis)
4. **No** inicialices con README

### Paso 2 — Configurar el repo name en Vite

Abrir `vite.config.js` y cambiar `base` al nombre exacto de tu repo:

```js
// Si tu repo se llama "yami-portfolio":
base: '/yami-portfolio/',

// Si tu repo se llama "portfolio":
base: '/portfolio/',
```

### Paso 3 — Habilitar GitHub Pages

En tu repo de GitHub:
1. Settings → Pages
2. Source: **GitHub Actions** ← importante, no "Deploy from a branch"

### Paso 4 — Subir el código

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/yami-portfolio.git
git push -u origin main
```

Eso es todo. GitHub Actions se dispara automáticamente, buildea y deploya.
Tu sitio estará en: `https://TU-USUARIO.github.io/yami-portfolio/`

### Deploys siguientes

Cada `git push origin main` triggeriza un nuevo deploy automático.

---

## Estructura del proyecto

```
yami-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions CI/CD
├── public/
├── src/
│   ├── assets/
│   │   └── style.css         # Design tokens + accesibilidad global
│   ├── components/
│   │   ├── mockups/          # SVG mockups de cada proyecto
│   │   │   ├── AutoshopMockup.vue
│   │   │   ├── BolsilloMockup.vue
│   │   │   ├── ConsorcionMockup.vue
│   │   │   └── RepublicaMockup.vue
│   │   ├── NavBar.vue        # Nav fija + toggle ES/EN
│   │   ├── HeroSection.vue
│   │   ├── MarqueeBar.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ProcessSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterBar.vue
│   ├── i18n/
│   │   ├── es.js             # Traducciones en español
│   │   ├── en.js             # English translations
│   │   └── index.js          # vue-i18n setup
│   ├── App.vue               # Root: cursor, lang, reveal
│   └── main.js
├── index.html
├── vite.config.js
└── package.json
```

---

## Accesibilidad implementada (WCAG 2.1 AA)

- **Skip link** — primer elemento enfocable, salta al `#main-content`
- **Focus ring visible** — naranja con 3px offset en todos los elementos interactivos (`:focus-visible`)
- **Jerarquía de headings** — `h1` en hero, `h2` por sección, `h3` en project cards
- **`aria-label`** en todos los links con contexto insuficiente
- **`aria-hidden="true"`** en elementos decorativos (cursor, números, marquee)
- **`role="list"` / `role="listitem"`** en stats y skills
- **`role="img"` + `aria-label`** en los SVG mockups
- **`lang`** del `<html>` se actualiza dinámicamente al cambiar idioma
- **Mínimo 44×44px** en todos los targets táctiles (WCAG 2.5.5)
- **`prefers-reduced-motion`** — desactiva todas las animaciones si el usuario lo prefiere
- **`forced-colors`** — soporte para modo de alto contraste de Windows
- **`rel="noopener noreferrer"`** en links externos con `target="_blank"`
- **Textos decorativos** no interfieren con lectores de pantalla

---

## Personalización

### Agregar un proyecto nuevo

1. Crear el mockup SVG en `src/components/mockups/NuevoMockup.vue`
2. Agregar las traducciones en `src/i18n/es.js` y `en.js` bajo `projects.p5`
3. Importar y usar el componente en `ProjectsSection.vue`

### Cambiar paleta de colores

Editar las variables en `src/assets/style.css`:

```css
:root {
  --orange:   #C96A3C;   /* acento principal */
  --cream:    #F8F4EF;   /* fondo claro */
  --ink:      #0D0A07;   /* fondo oscuro / texto */
}
```

---

## Licencia

Uso personal. Todos los derechos reservados — Yamila Lemos, 2025.
