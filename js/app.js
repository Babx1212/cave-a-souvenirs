// ============================================================
//  APP.JS — Cave à Souvenirs
//  Gère la navigation et le rendu des pages.
//  Vous n'avez pas besoin de modifier ce fichier.
// ============================================================

// ── Constantes de couleurs par type de vin ────────────────
const WINE_TYPE = {
  rouge:     { label: 'Rouge',     emoji: '🍷', css: 'badge-rouge'     },
  blanc:     { label: 'Blanc',     emoji: '🥂', css: 'badge-blanc'     },
  rosé:      { label: 'Rosé',      emoji: '🌸', css: 'badge-rose'      },
  rose:      { label: 'Rosé',      emoji: '🌸', css: 'badge-rose'      },
  orange:    { label: 'Orange',    emoji: '🍊', css: 'badge-orange'    },
  pétillant: { label: 'Pétillant', emoji: '✨', css: 'badge-petillant' },
  petillant: { label: 'Pétillant', emoji: '✨', css: 'badge-petillant' },
  liquoreux: { label: 'Liquoreux', emoji: '🍯', css: 'badge-liquoreux' },
};

// ── Calcul des statistiques globales ─────────────────────
function getStats() {
  const sessions = CLUB.sessions;
  const totalWines = sessions.reduce((s, sess) => s + sess.wines.length, 0);
  const avgScore = sessions.flatMap(s => s.wines)
    .reduce((sum, w, _, arr) => sum + w.score / arr.length, 0);
  const regions = new Set(sessions.flatMap(s => s.wines.map(w => w.region.split('—')[0].trim())));
  return { sessions: sessions.length, wines: totalWines, avgScore: Math.round(avgScore), regions: regions.size };
}

// ── Rendu : badge type de vin ─────────────────────────────
function renderBadge(type) {
  const t = WINE_TYPE[type] || { label: type, emoji: '🍾', css: 'badge-rouge' };
  return `<span class="badge ${t.css}">${t.emoji} ${t.label}</span>`;
}

// ── Rendu : barre de score ────────────────────────────────
function renderScoreBar(score) {
  // Score direct sur 100 → jauge complète à 100 pts
  const pct = Math.max(0, Math.min(100, score));
  return `
    <div class="wine-score-wrap">
      <div class="wine-score">${score}</div>
      <div class="wine-score-label">pts</div>
      <div class="score-bar-wrap">
        <div class="score-bar" style="width:${pct}%"></div>
      </div>
    </div>`;
}

// ── Rendu : page d'accueil ────────────────────────────────
function renderHome() {
  const stats = getStats();

  const heroHtml = `
    <section class="hero">
      <div class="hero-icon">🍷</div>
      <h1>${CLUB.name}</h1>
      <p>${CLUB.subtitle}</p>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">${stats.sessions}</span>
          <span class="stat-label">Soirées</span>
        </div>
        <div class="stat">
          <span class="stat-number">${stats.wines}</span>
          <span class="stat-label">Vins dégustés</span>
        </div>
        <div class="stat">
          <span class="stat-number">${stats.avgScore}</span>
          <span class="stat-label">Score moyen</span>
        </div>
        <div class="stat">
          <span class="stat-number">${stats.regions}</span>
          <span class="stat-label">Régions</span>
        </div>
      </div>
    </section>`;

  const cardsHtml = CLUB.sessions.map(session => {
    const wineBadges = session.wines.map(w => renderBadge(w.type)).join('');
    return `
      <article class="session-card" onclick="navigateTo('session', '${session.id}')">
        <div class="card-banner" style="background: linear-gradient(135deg, ${session.coverColor} 0%, ${session.coverColor}99 100%);">
          <span class="card-date">${session.date}</span>
        </div>
        <div class="card-body">
          <div class="card-theme">${session.theme}</div>
          <div class="card-host">
            <span>📍</span> ${session.host} · ${session.location.split(',')[0]}
          </div>
          <div class="card-wines">${wineBadges}</div>
        </div>
        <div class="card-footer">
          <span class="wines-count">${session.wines.length} vins dégustés</span>
          <span class="card-arrow">Lire la soirée →</span>
        </div>
      </article>`;
  }).join('');

  return `
    ${heroHtml}
    <div class="container">
      <div class="section-header">
        <h2>Nos soirées</h2>
        <div class="line"></div>
      </div>
      <div class="sessions-grid">${cardsHtml}</div>
    </div>`;
}

// ── Rendu : fiche d'un vin ────────────────────────────────
function renderWineCard(wine, index) {
  const type = WINE_TYPE[wine.type] || { label: wine.type, emoji: '🍾', css: 'badge-rouge' };

  return `
    <article class="wine-card" style="animation-delay: ${index * 0.1}s">
      <div class="wine-card-header">
        <div class="wine-info">
          <div class="wine-name">${wine.name}</div>
          <div class="wine-domain">${wine.domain} · ${wine.vintage}</div>
        </div>
        ${renderBadge(wine.type)}
        ${renderScoreBar(wine.score)}
      </div>

      <div class="wine-card-tags">
        <span class="tag">🗺️ <strong>${wine.region}</strong></span>
        <span class="tag">🌿 <strong>${wine.grape}</strong></span>
        <span class="tag">📋 <strong>${wine.appellation}</strong></span>
      </div>

      <div class="wine-card-body">
        <div class="tasting-block">
          <h4>👃 Nez</h4>
          <p>${wine.nose}</p>
        </div>
        <div class="tasting-block">
          <h4>👄 Bouche</h4>
          <p>${wine.palate}</p>
        </div>

        ${wine.pairing ? `
        <div class="pairing-block">
          <span class="pairing-icon">🍽️</span>
          <div class="pairing-text">
            <strong>Accord mets-vin</strong>
            ${wine.pairing}
          </div>
        </div>` : ''}

        ${wine.notes ? `<div class="notes-block">${wine.notes}</div>` : ''}
      </div>
    </article>`;
}

// ── Rendu : page session ──────────────────────────────────
function renderSession(sessionId) {
  const session = CLUB.sessions.find(s => s.id === sessionId);
  if (!session) return `<div class="container"><p>Session introuvable.</p></div>`;

  const winesHtml = session.wines.map((w, i) => renderWineCard(w, i)).join('');

  return `
    <section class="session-hero" style="background: linear-gradient(135deg, ${session.coverColor} 0%, ${lightenColor(session.coverColor)} 100%);">
      <div class="container">
        <button class="back-btn" onclick="navigateTo('home')">← Toutes les soirées</button>
        <div class="session-date-label">${session.date}</div>
        <h1 class="session-title">${session.theme}</h1>
        <div class="session-meta">
          <span class="meta-item"><span class="meta-icon">🏠</span> Chez ${session.host}</span>
          <span class="meta-item"><span class="meta-icon">📍</span> ${session.location}</span>
          <span class="meta-item"><span class="meta-icon">🍾</span> ${session.wines.length} vins</span>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="session-context">
        <div class="context-grid">
          <div class="context-block">
            <h3>🍽️ Au menu</h3>
            <p>${session.cuisine}</p>
          </div>
          <div class="context-block">
            <h3>👥 Les membres présents</h3>
            <p>${CLUB.members.join(', ')}</p>
          </div>
          <div class="session-description">${session.description}</div>
        </div>
      </div>

      <div class="wines-section">
        <h2>Les vins de la soirée</h2>
        ${winesHtml}
      </div>
    </div>`;
}

// ── Utilitaire : éclaircit légèrement une couleur hex ─────
function lightenColor(hex) {
  const r = Math.min(255, parseInt(hex.slice(1,3), 16) + 40);
  const g = Math.min(255, parseInt(hex.slice(3,5), 16) + 40);
  const b = Math.min(255, parseInt(hex.slice(5,7), 16) + 40);
  return `rgb(${r},${g},${b})`;
}

// ── Navigation (routeur hash) ─────────────────────────────
function navigateTo(page, id) {
  if (page === 'home') {
    history.pushState({}, '', '#');
  } else if (page === 'session') {
    history.pushState({}, '', `#session/${id}`);
  }
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPage() {
  const hash = window.location.hash;
  const main = document.getElementById('main-content');
  if (hash.startsWith('#session/')) {
    const id = hash.replace('#session/', '');
    main.innerHTML = renderSession(id);
  } else {
    main.innerHTML = renderHome();
  }
}

// ── Header rendu ──────────────────────────────────────────
function renderHeader() {
  document.getElementById('site-header').innerHTML = `
    <div class="site-logo" onclick="navigateTo('home')">
      <span>🍷</span> ${CLUB.name}
    </div>
    <nav class="header-nav">
      <button onclick="navigateTo('home')" class="active">Accueil</button>
    </nav>`;
}

// ── Footer ────────────────────────────────────────────────
function renderFooter() {
  const stats = getStats();
  document.getElementById('site-footer').innerHTML = `
    <span>${CLUB.name}</span> · ${stats.sessions} soirées · ${stats.wines} vins dégustés<br>
    <small>Fait avec 🍷 et JavaScript</small>`;
}

// ── Init ──────────────────────────────────────────────────
window.addEventListener('popstate', renderPage);
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  renderPage();
});
