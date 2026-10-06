/* ---------- Home: hero ---------- */
.hero {
  padding: 24px 0 8px;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 32px;
  align-items: center;
}

.hero__content {
  position: relative;
  min-height: 300px;
}

.hero__eyebrow {
  margin: 0;
  font-size: clamp(2rem, 4.4vw, 3.1rem);
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;
  color: var(--light);
}

.hero__title {
  font-size: clamp(2rem, 4.4vw, 3.1rem);
  line-height: 1.05;
}

.hero__controls {
  display: flex;
  gap: 18px;
  margin-top: 24px;
}

.hero__controls button {
  display: inline-flex;
  padding: 6px;
  color: var(--ink);
  background: none;
  border: 0;
  cursor: pointer;
}

.hero__controls button:hover {
  color: var(--muted);
}

.hero__social {
  margin-top: 28px;
  color: var(--muted);
}

.hero__social svg {
  width: 11px;
  height: 11px;
}

.hero__media {
  position: relative;
  aspect-ratio: 1 / 1.05;
  overflow: hidden;
  background: var(--field);
}

.hero__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fade 0.5s ease;
}

.hero__cta {
  position: absolute;
  right: 0;
  bottom: 0;
}

@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
  }

  .hero__content {
    min-height: 0;
  }

  .hero__media {
    aspect-ratio: 4 / 3;
  }
}

/* ---------- Home: sobre ---------- */
.about-box {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 40px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  background: var(--soft);
  max-width: calc(var(--container) - 48px);
}

.about-box__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-items: start;
}

.about-box__images img {
  width: 100%;
  object-fit: cover;
}

.about-box__images img:first-child {
  aspect-ratio: 3 / 4;
}

.about-box__images img:last-child {
  aspect-ratio: 1 / 1;
  margin-top: 30px;
}

.about-box__text p {
  font-size: 0.7rem;
  line-height: 1.8;
}

.about-box__text .btn {
  margin-top: 8px;
}

@media (max-width: 820px) {
  .about-box {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
}

/* ---------- Home: missão ---------- */
.mission {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  margin-top: 36px;
}

.mission__item {
  display: flex;
  gap: 22px;
  align-items: flex-start;
}

.mission__number {
  font-size: 4.6rem;
  font-weight: 300;
  line-height: 0.9;
  color: var(--light);
}

.mission__item p {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.8;
}

@media (max-width: 720px) {
  .mission {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

/* ---------- Home: mosaico de projetos ---------- */
.tiles {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 190px;
  gap: 12px;
}

.tile {
  position: relative;
  overflow: hidden;
  background: var(--ink);
}

.tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.tile:hover img {
  transform: scale(1.05);
}

.tile--1 {
  grid-column: span 3;
}

.tile--2 {
  grid-column: span 3;
}

.tile--3,
.tile--4,
.tile--5 {
  grid-column: span 2;
}

.tile--dark img {
  opacity: 0.35;
  filter: grayscale(1);
}

.tile__label {
  position: absolute;
  left: 22px;
  top: 50%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: #fff;
  transform: translateY(-50%);
}

.tile__label strong {
  color: #fff;
  font-size: 1.7rem;
  line-height: 1.1;
}

.tile__label small {
  margin-top: 6px;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
}

.tiles__action {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}

@media (max-width: 720px) {
  .tiles {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }

  .tile--1 {
    grid-column: span 2;
  }

  .tile--2,
  .tile--3,
  .tile--4,
  .tile--5 {
    grid-column: span 1;
  }

  .tile--5 {
    grid-column: span 2;
  }
}

/* ---------- Galeria ---------- */
.gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

.gallery li {
  aspect-ratio: 1 / 1.05;
  overflow: hidden;
  background: var(--field);
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery li:hover img {
  transform: scale(1.06);
}

@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 520px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ---------- Detalhe do projeto ---------- */
.detail__cover {
  width: 100%;
  height: clamp(200px, 32vw, 340px);
  object-fit: cover;
}

.detail__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  margin-top: 16px;
  align-items: start;
}

.detail__side {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.detail__text p {
  font-size: 0.72rem;
  line-height: 1.8;
  text-align: justify;
}

.detail__plans {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.detail__plans img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.detail__pager {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.detail__pager a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.detail__pager a:hover {
  color: var(--ink);
  text-decoration: underline;
}

.detail__all {
  color: var(--muted);
}

@media (max-width: 720px) {
  .detail__content,
  .detail__plans {
    grid-template-columns: 1fr;
  }

  .detail__pager {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* ---------- Sobre ---------- */
.about-page {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 72px;
}

.about-page img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-page__text p {
  font-size: 0.78rem;
  line-height: 1.85;
}

.certs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.cert {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  min-height: 170px;
  padding: 22px;
  background: var(--soft);
  border: 1px solid var(--line);
}

.cert__year {
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1;
  color: var(--light);
}

.cert strong {
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .about-page {
    grid-template-columns: 1fr;
  }

  .certs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .certs {
    grid-template-columns: 1fr;
  }
}

/* ---------- Contato ---------- */
.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 56px;
  margin-bottom: 48px;
  font-size: 0.82rem;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-info svg {
  flex: none;
  margin-top: 4px;
  color: var(--muted);
}

/* ---------- 404 / projeto inexistente ---------- */
.notfound {
  padding: 48px 0;
  text-align: center;
}

.notfound h1 {
  margin-bottom: 12px;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 300;
  color: var(--light);
}

.notfound p {
  margin-bottom: 28px;
}
