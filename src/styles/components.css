/* ---------- Logo ---------- */
.logo {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: var(--ink);
}

.logo__mark {
  width: 26px;
  height: 30px;
}

.logo__text {
  font-size: 0.5rem;
  font-weight: 400;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  white-space: nowrap;
}

.logo--light {
  color: #fff;
}

.logo--light .logo__mark {
  width: 40px;
  height: 46px;
}

.logo--light .logo__text {
  font-size: 0.62rem;
}

/* ---------- Header ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
  border-bottom: 1px solid var(--line);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 84px;
}

.nav {
  display: flex;
  gap: 40px;
  margin: 0 auto;
}

.nav__link {
  padding: 6px 0;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.nav__link:hover,
.nav__link--active {
  border-bottom-color: var(--ink);
  color: var(--ink);
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: 0;
  cursor: pointer;
}

.header__toggle span {
  width: 24px;
  height: 2px;
  background: var(--ink);
}

@media (min-width: 821px) {
  /* compensa a largura do logo para centralizar o menu */
  .header__inner::after {
    content: '';
    width: 90px;
  }
}

@media (max-width: 820px) {
  .header__toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    gap: 0;
    margin: 0;
    padding: 4px 24px 16px;
    background: #fff;
    border-bottom: 1px solid var(--line);
  }

  .nav--open {
    display: flex;
  }

  .nav__link {
    padding: 16px 0;
    font-size: 0.72rem;
    border-bottom: 1px solid var(--line);
  }
}

/* ---------- Page title ---------- */
.page-title {
  margin-bottom: 32px;
  font-size: clamp(2.4rem, 5.5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.02;
  color: var(--light);
}

.page-title strong {
  display: block;
  font-weight: 700;
  color: var(--ink);
}

.page-title--single {
  font-size: clamp(1.7rem, 3.4vw, 2.4rem);
}

/* ---------- Button ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding: 14px 26px;
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.btn--dark {
  background: var(--footer);
  color: #fff;
}

.btn--dark:hover {
  background: #000;
}

.btn--white {
  background: #fff;
  color: var(--ink);
}

.btn--white:hover {
  background: var(--ink);
  color: #fff;
}

.btn--outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--ink);
}

.btn--outline:hover {
  background: var(--ink);
  color: #fff;
}

/* ---------- Social ---------- */
.social {
  display: flex;
  gap: 18px;
}

.social a {
  display: inline-flex;
  color: inherit;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.social a:hover {
  opacity: 1;
}

/* ---------- Pagination ---------- */
.pagination {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 56px;
}

.pagination__count {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
}

.pagination__current {
  color: var(--ink);
}

.pagination__total {
  color: var(--light);
}

.pagination__slash {
  width: 1px;
  height: 26px;
  background: var(--light);
  transform: rotate(35deg);
}

.pagination__buttons {
  display: flex;
  gap: 10px;
}

.pagination__buttons button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 36px;
  color: var(--ink);
  background: var(--soft);
  border: 1px solid var(--line);
  cursor: pointer;
  transition: background 0.2s;
}

.pagination__buttons button:hover:not(:disabled) {
  background: var(--line);
}

.pagination__buttons button:disabled {
  color: var(--light);
  cursor: not-allowed;
}

/* ---------- Project row ---------- */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.project-row {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  background: var(--soft);
}

.project-row__media {
  min-height: 250px;
  overflow: hidden;
}

.project-row__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-row__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 36px;
}

.project-row__title {
  margin-bottom: 22px;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  font-weight: 300;
  color: var(--light);
}

.project-row__text {
  margin-bottom: 26px;
  font-size: 0.72rem;
  line-height: 1.7;
  color: var(--text);
}

.project-row__body .btn {
  align-self: flex-start;
}

@media (max-width: 760px) {
  .project-row {
    grid-template-columns: 1fr;
  }

  .project-row__media {
    min-height: 0;
    aspect-ratio: 16 / 10;
  }

  .project-row__body {
    padding: 24px;
  }
}

/* ---------- Contact section (form + photo) ---------- */
.contact-section {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 32px;
  align-items: end;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form input,
.form textarea {
  width: 100%;
  padding: 14px 16px;
  font-size: 0.78rem;
  color: var(--ink);
  background: var(--field);
  border: 1px solid transparent;
  border-radius: 0;
  resize: vertical;
}

.form input::placeholder,
.form textarea::placeholder {
  color: var(--muted);
}

.form input:focus,
.form textarea:focus {
  outline: none;
  border-color: var(--ink);
  background: #fff;
}

.form .btn {
  margin-top: 14px;
}

.form__success {
  margin: 8px 0 0;
  font-size: 0.85rem;
  color: #2f6b3a;
}

.contact-section__media img {
  width: 100%;
  height: 100%;
  max-height: 380px;
  object-fit: cover;
}

@media (max-width: 820px) {
  .contact-section {
    grid-template-columns: 1fr;
  }

  .contact-section__media {
    order: -1;
  }
}

/* ---------- Footer ---------- */
.footer {
  background: var(--footer);
  color: #fff;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1.6fr 1fr;
  gap: 40px;
  padding-top: 56px;
  padding-bottom: 56px;
}

.footer__title {
  margin-bottom: 22px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
}

.footer__list li {
  margin-bottom: 14px;
  font-size: 0.68rem;
}

.footer__list a:hover {
  text-decoration: underline;
}

.footer__contacts li {
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
  font-size: 0.68rem;
  line-height: 1.8;
}

.footer__contacts svg {
  flex: none;
  width: 12px;
  height: 12px;
  margin-top: 5px;
}

.footer__bottom {
  padding: 22px 24px;
  text-align: center;
  font-size: 0.6rem;
  color: #7c7c7c;
  border-top: 1px solid #3a3a3a;
}

@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
