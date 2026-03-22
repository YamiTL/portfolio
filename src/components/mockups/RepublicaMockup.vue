<template>
<svg viewBox="0 0 460 400" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
  <rect width="460" height="400" fill="#0D0A07"/>
  <line x1="0" y1="56" x2="460" y2="56" stroke="#1C1610" stroke-width="1"/>
  <line x1="0" y1="120" x2="460" y2="120" stroke="#1C1610" stroke-width="1"/>
  <line x1="0" y1="184" x2="460" y2="184" stroke="#1C1610" stroke-width="1"/>
  <line x1="0" y1="248" x2="460" y2="248" stroke="#1C1610" stroke-width="1"/>
  <line x1="0" y1="312" x2="460" y2="312" stroke="#1C1610" stroke-width="1"/>
  <!-- Header -->
  <rect x="0" y="0" width="460" height="44" fill="#1C1610"/>
  <text x="18" y="26" font-size="11" fill="#E8895E" font-family="DM Serif Display,serif" font-style="italic">RepúblicaData</text>
  <text x="230" y="26" font-size="8" fill="#6B4E35" font-family="DM Sans,sans-serif" text-anchor="middle">Panel de Gobierno · Buenos Aires</text>
  <circle cx="424" cy="22" r="5" fill="#C96A3C"/>
  <text x="433" y="25" font-size="7" fill="#E8895E" font-family="DM Sans,sans-serif">LIVE</text>
  <!-- KPI cards -->
  <rect x="12" y="56" width="96" height="60" rx="2" fill="#1C1610"/>
  <text x="60" y="72" font-size="6.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Satisfacción ciudadana</text>
  <text x="60" y="94" font-size="18" fill="#F8F4EF" text-anchor="middle" font-family="DM Serif Display,serif">68%</text>
  <rect x="12" y="108" width="96" height="5" fill="#2C2017"/>
  <rect x="12" y="108" width="65" height="5" fill="#C96A3C"/>
  <rect x="116" y="56" width="96" height="60" rx="2" fill="#1C1610"/>
  <text x="164" y="72" font-size="6.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Demandas activas</text>
  <text x="164" y="94" font-size="18" fill="#F8F4EF" text-anchor="middle" font-family="DM Serif Display,serif">2.341</text>
  <text x="164" y="108" font-size="5.5" fill="#E8895E" text-anchor="middle" font-family="DM Sans,sans-serif">+12% esta semana</text>
  <rect x="220" y="56" width="96" height="60" rx="2" fill="#1C1610"/>
  <text x="268" y="72" font-size="6.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Ciudadanos activos</text>
  <text x="268" y="94" font-size="18" fill="#F8F4EF" text-anchor="middle" font-family="DM Serif Display,serif">41K</text>
  <text x="268" y="108" font-size="5.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">mes corriente</text>
  <rect x="324" y="56" width="124" height="60" rx="2" fill="#C96A3C"/>
  <text x="386" y="72" font-size="6.5" fill="#F5E8DF" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="500">⚠ Alerta activa</text>
  <text x="386" y="87" font-size="8.5" fill="#FDFBF8" text-anchor="middle" font-family="DM Serif Display,serif">Zona Sur</text>
  <text x="386" y="100" font-size="6" fill="#F5E8DF" text-anchor="middle" font-family="DM Sans,sans-serif">Saneamiento · 1.2K reportes</text>
  <!-- Heatmap panel -->
  <rect x="12" y="124" width="200" height="152" rx="2" fill="#1C1610"/>
  <text x="24" y="138" font-size="6.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Mapa de calor · demandas por barrio</text>
  <polygon points="50,158 64,150 78,158 78,174 64,182 50,174" fill="#C96A3C" opacity="0.9"/>
  <polygon points="78,158 92,150 106,158 106,174 92,182 78,174" fill="#E8895E" opacity="0.7"/>
  <polygon points="106,158 120,150 134,158 134,174 120,182 106,174" fill="#6B4E35" opacity="0.8"/>
  <polygon points="134,158 148,150 162,158 162,174 148,182 134,174" fill="#C96A3C" opacity="0.65"/>
  <polygon points="64,182 78,174 92,182 92,198 78,206 64,198" fill="#E8895E" opacity="0.8"/>
  <polygon points="92,182 106,174 120,182 120,198 106,206 92,198" fill="#A88B73" opacity="0.7"/>
  <polygon points="120,182 134,174 148,182 148,198 134,206 120,198" fill="#C96A3C" opacity="1"/>
  <polygon points="148,182 162,174 176,182 176,198 162,206 148,198" fill="#6B4E35" opacity="0.6"/>
  <polygon points="78,206 92,198 106,206 106,222 92,230 78,222" fill="#E8895E" opacity="0.55"/>
  <polygon points="106,206 120,198 134,206 134,222 120,230 106,222" fill="#C96A3C" opacity="0.75"/>
  <polygon points="134,206 148,198 162,206 162,222 148,230 134,222" fill="#E8895E" opacity="0.5"/>
  <rect x="24" y="248" width="8" height="6" fill="#6B4E35"/>
  <text x="36" y="254" font-size="5.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Bajo</text>
  <rect x="68" y="248" width="8" height="6" fill="#E8895E"/>
  <text x="80" y="254" font-size="5.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Medio</text>
  <rect x="116" y="248" width="8" height="6" fill="#C96A3C"/>
  <text x="128" y="254" font-size="5.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Alto</text>
  <!-- Chart panel -->
  <rect x="220" y="124" width="228" height="152" rx="2" fill="#1C1610"/>
  <text x="232" y="138" font-size="6.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Participación histórica · 12 meses</text>
  <polyline points="240,256 262,240 284,246 306,226 328,232 350,212 372,218 394,198 416,192 438,178"
    fill="none" stroke="#C96A3C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="240,264 240,256 262,240 284,246 306,226 328,232 350,212 372,218 394,198 416,192 438,178 438,264"
    fill="#C96A3C" opacity="0.1"/>
  <circle cx="438" cy="178" r="5" fill="#C96A3C" stroke="#0D0A07" stroke-width="2"/>
  <rect x="400" y="164" width="50" height="12" rx="2" fill="#C96A3C"/>
  <text x="425" y="172" font-size="6" fill="#FDFBF8" text-anchor="middle" font-family="DM Sans,sans-serif">41.2K activos</text>
  <text x="240" y="274" font-size="5" fill="#2C2017" font-family="DM Sans,sans-serif">Mar</text>
  <text x="284" y="274" font-size="5" fill="#2C2017" font-family="DM Sans,sans-serif">May</text>
  <text x="328" y="274" font-size="5" fill="#2C2017" font-family="DM Sans,sans-serif">Jul</text>
  <text x="372" y="274" font-size="5" fill="#2C2017" font-family="DM Sans,sans-serif">Sep</text>
  <text x="416" y="274" font-size="5" fill="#2C2017" font-family="DM Sans,sans-serif">Nov</text>
  <!-- Topics bar -->
  <rect x="12" y="284" width="436" height="36" rx="2" fill="#1C1610"/>
  <text x="24" y="298" font-size="6.5" fill="#6B4E35" font-family="DM Sans,sans-serif">Temas más demandados:</text>
  <rect x="156" y="289" width="60" height="14" rx="2" fill="#2C2017"/>
  <text x="186" y="298.5" font-size="5.5" fill="#E8895E" text-anchor="middle" font-family="DM Sans,sans-serif">Saneamiento · 1.2K</text>
  <rect x="222" y="289" width="54" height="14" rx="2" fill="#2C2017"/>
  <text x="249" y="298.5" font-size="5.5" fill="#E8895E" text-anchor="middle" font-family="DM Sans,sans-serif">Transporte · 980</text>
  <rect x="282" y="289" width="52" height="14" rx="2" fill="#2C2017"/>
  <text x="308" y="298.5" font-size="5.5" fill="#E8895E" text-anchor="middle" font-family="DM Sans,sans-serif">Seguridad · 754</text>
  <rect x="340" y="289" width="54" height="14" rx="2" fill="#C96A3C" opacity="0.55"/>
  <text x="367" y="298.5" font-size="5.5" fill="#F5E8DF" text-anchor="middle" font-family="DM Sans,sans-serif">Educación · 631</text>
  <!-- Participation module -->
  <rect x="12" y="328" width="436" height="60" rx="2" fill="#1C1610"/>
  <text x="24" y="344" font-size="7" fill="#A88B73" font-family="DM Sans,sans-serif">Módulo ciudadano · participación directa</text>
  <text x="24" y="358" font-size="6" fill="#6B4E35" font-family="DM Sans,sans-serif">¿Cuál es tu prioridad para el barrio?</text>
  <rect x="24" y="363" width="78" height="16" rx="2" fill="#C96A3C" opacity="0.85"/>
  <text x="63" y="373" font-size="5.5" fill="#FDFBF8" text-anchor="middle" font-family="DM Sans,sans-serif">Saneamiento</text>
  <rect x="108" y="363" width="68" height="16" rx="2" fill="#2C2017"/>
  <text x="142" y="373" font-size="5.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Transporte</text>
  <rect x="182" y="363" width="64" height="16" rx="2" fill="#2C2017"/>
  <text x="214" y="373" font-size="5.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Seguridad</text>
  <rect x="252" y="363" width="62" height="16" rx="2" fill="#2C2017"/>
  <text x="283" y="373" font-size="5.5" fill="#6B4E35" text-anchor="middle" font-family="DM Sans,sans-serif">Educación</text>
  <text x="334" y="373" font-size="5.5" fill="#6B4E35" font-family="DM Sans,sans-serif">41.2K respuestas</text>
</svg>
</template>
