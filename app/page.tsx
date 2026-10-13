const navigation = [
  "Tigres",
  "Tigres Femenil",
  "Club",
  "Formación",
  "Impacto Social",
  "Incomparables",
];

const news = [
  { category: "Academia", title: "Título para la noticia principal de la academia" },
  { category: "Formación", title: "Espacio para comunicar actividades y convocatorias" },
  { category: "Comunidad", title: "Historias de nuestra comunidad incomparable" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand-mark${compact ? " brand-mark--compact" : ""}`} aria-label="Academia Tigres Linares">
      <span className="brand-mark__crest">ATL</span>
      <span className="brand-mark__copy">
        <strong>TIGRES</strong>
        <small>ACADEMIA LINARES</small>
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="club-site">
      <header className="club-header">
        <div className="utility-bar">
          <div className="site-container utility-bar__content">
            <div className="utility-actions" aria-label="Acciones informativas">
              <span>BOLETOS</span>
              <span>RECIBE LO ÚLTIMO DE TIGRES</span>
            </div>
            <div className="utility-tools"><span>BUSCAR</span><span>ES</span></div>
          </div>
        </div>

        <div className="primary-header site-container">
          <BrandMark />
          <nav className="primary-navigation" aria-label="Navegación principal no habilitada">
            {navigation.map((item) => (
              <span key={item} className="nav-item" aria-disabled="true">
                {item}<span aria-hidden="true">⌄</span>
              </span>
            ))}
          </nav>
          <button className="menu-placeholder" type="button" disabled aria-label="Menú no habilitado">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="club-hero" aria-labelledby="hero-title">
          <div className="club-hero__stripe" aria-hidden="true" />
          <div className="site-container club-hero__content">
            <p className="section-kicker section-kicker--light">ACADEMIA OFICIAL · LINARES</p>
            <h1 id="hero-title">PASIÓN QUE<br />SE ENTRENA</h1>
            <p>Este espacio será la portada informativa de la Academia Tigres Linares.</p>
            <button type="button" className="outline-action" disabled>CONOCE LA ACADEMIA</button>
          </div>
          <div className="hero-pagination" aria-hidden="true"><strong>01</strong><span /><span /><span /></div>
        </section>

        <section className="content-section news-section">
          <div className="site-container">
            <div className="section-heading">
              <div><p className="section-kicker">ENTÉRATE DE TODO</p><h2>ÚLTIMAS NOTICIAS</h2></div>
              <span className="text-action" aria-disabled="true">VER TODAS LAS NOTICIAS →</span>
            </div>
            <div className="news-grid">
              {news.map((item, index) => (
                <article className="news-card" key={item.title}>
                  <div className={`media-placeholder media-placeholder--${index + 1}`} aria-label="Espacio reservado para imagen"><span>SIN IMAGEN</span></div>
                  <div className="news-card__body"><p>{item.category}</p><h3>{item.title}</h3><span className="card-meta">CONTENIDO PENDIENTE</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="match-section">
          <div className="site-container match-layout">
            <div className="match-intro"><p className="section-kicker section-kicker--light">AGENDA DEPORTIVA</p><h2>PRÓXIMO<br />PARTIDO</h2><p>La información se conectará al calendario en una etapa posterior.</p></div>
            <div className="match-card">
              <p className="match-card__competition">PRÓXIMA JORNADA · FECHA POR DEFINIR</p>
              <div className="match-card__teams">
                <div><span className="team-badge">ATL</span><strong>ACADEMIA</strong></div>
                <div className="match-score"><span>VS</span><small>-- : --</small></div>
                <div><span className="team-badge team-badge--outline">RIVAL</span><strong>VISITANTE</strong></div>
              </div>
              <span className="match-card__venue">SEDE POR CONFIRMAR</span>
            </div>
          </div>
        </section>

        <section className="content-section latest-section">
          <div className="site-container">
            <div className="section-heading section-heading--center"><div><p className="section-kicker">LO ÚLTIMO DE</p><h2>TIGRES Y TIGRES FEMENIL</h2></div></div>
            <div className="social-grid">
              {["TIGRES", "TIGRES FEMENIL", "ACADEMIA", "COMUNIDAD"].map((label) => (
                <article className="social-card" key={label}>
                  <div className="social-card__top"><span className="social-avatar">T</span><strong>{label}</strong></div>
                  <div className="social-placeholder"><span>CONTENIDO SOCIAL</span></div>
                  <p>Espacio reservado para publicaciones oficiales.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="video-section">
          <div className="site-container">
            <p className="section-kicker section-kicker--light">CANAL OFICIAL</p>
            <div className="section-heading section-heading--light"><h2>VIDEOS</h2><span className="text-action text-action--light" aria-disabled="true">VER MÁS VIDEOS →</span></div>
            <div className="video-grid">
              <article className="video-feature"><span className="play-mark">▶</span><strong>VIDEO DESTACADO</strong></article>
              <div className="video-list">
                {["Club Tigres", "Academia Tigres", "Historias incomparables"].map((title, index) => (
                  <article key={title}><span className="video-number">0{index + 1}</span><div><small>PRÓXIMAMENTE</small><h3>{title}</h3></div></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="teams-section">
          <article className="team-panel team-panel--yellow"><p>CONOCE AL</p><h2>EQUIPO<br />VARONIL</h2><span aria-disabled="true">VER PLANTEL →</span></article>
          <article className="team-panel team-panel--blue"><p>CONOCE A LAS</p><h2>SÚPER<br />AMAZONAS</h2><span aria-disabled="true">VER PLANTEL →</span></article>
        </section>
      </main>

      <footer className="club-footer">
        <div className="site-container footer-main">
          <BrandMark compact />
          <div><strong>CLUB</strong><span>Noticias</span><span>Historia</span><span>Campeonatos</span></div>
          <div><strong>FORMACIÓN</strong><span>Fuerzas Básicas</span><span>Escuela Oficial</span><span>Academias Tigres</span></div>
          <div><strong>ACADEMIA</strong><span>Nosotros</span><span>Contacto</span><span>Acceso administrativo</span></div>
        </div>
        <div className="site-container footer-legal"><span>© Academia Tigres Linares</span><span>MAQUETA DE DESARROLLO · ENLACES NO HABILITADOS</span></div>
      </footer>
    </div>
  );
}
