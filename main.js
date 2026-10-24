/* ===== Контакты — замените на свои ===== */
const CONTACTS = {
  whatsapp: "79136926343",          // номер без «+» и пробелов
  telegramUrl: "https://t.me/barbershop_1988",
  dikidiUrl: "https://dikidi.net/1856321",   // онлайн-запись (из карточки 2ГИС)
  phone: "+79136926343",
  phoneLabel: "+7 913 692-63-43",
  phones: [["+79136926343", "+7 913 692-63-43"], ["+79631981988", "+7 963 198-19-88"], ["+79136926387", "+7 913 692-63-87"]],
};

const WA_URL = `https://wa.me/${CONTACTS.whatsapp}`;
const TG_URL = CONTACTS.telegramUrl;

const ICONS = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.6 2 2.17 6.43 2.17 11.87c0 1.74.46 3.44 1.32 4.94L2.1 22l5.33-1.4a9.86 9.86 0 0 0 4.61 1.17h.01c5.44 0 9.87-4.43 9.87-9.87 0-2.64-1.03-5.12-2.87-6.99zm-7.01 15.19h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.17 8.17 0 0 1-1.25-4.33c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.41a8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.22-8.15 8.22zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>',
  tg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.3 18.9 18.65c-.23 1.01-.83 1.26-1.68.79l-4.63-3.41-2.23 2.15c-.25.25-.45.45-.93.45l.33-4.71 8.58-7.75c.37-.33-.08-.52-.58-.18L7.25 12.67 2.68 11.24c-.99-.31-1.01-.99.21-1.47l17.86-6.88c.83-.31 1.55.19 1.19 1.41z"/></svg>',
};

// Знак: типографская версия по логотипу (текстом, без файла). Оригинальный логотип подставить из файла владельца.
const T = (x, y, size, len, str, w = 400) => `<text x="${x}" y="${y}" font-size="${size}" font-weight="${w}" textLength="${len}" lengthAdjust="spacingAndGlyphs">${str}</text>`;
const STAR = "M50 8l11.8 23.9 26.4 3.8-19.1 18.6 4.5 26.3L50 68.2 26.4 80.6l4.5-26.3L11.8 35.7l26.4-3.8z";
const markSvg = (cls = "", mono = false) => mono
  ? `<svg class="mark mark--mono ${cls}" viewBox="0 0 100 100" aria-hidden="true"><path class="m-text" d="${STAR}" fill="currentColor"/></svg>`
  : `<div class="lockup ${cls}" aria-hidden="true"><div class="lk-stars">★★★★★</div><div class="lk-small">БРЭНД АВТОРСКИХ БАРБЕРШОПОВ</div><div class="lk-small">ГУСЕЙНОВА РАМИЛЯ</div><div class="lk-rule"></div><div class="lk-word">BARBERSHOP</div><div class="lk-sub">• БАРБЕРШОП 1988 •</div><div class="lk-since">основан в 2017 году</div></div>`;
const MARK = markSvg("", true);

/* ===== Общие блоки: хедер, футер, плавающие кнопки ===== */
const page = document.body.dataset.page;

function renderChrome() {
  const header = document.getElementById("header");
  if (header) {
    header.outerHTML = `
    <header class="header" id="site-header">
      <div class="wrap header__in">
        <a class="brand" href="index.html" aria-label="BARBERSHOP 1988">${MARK}<span class="brand__word">BARBERSHOP 1988</span></a>
        <nav class="nav" id="nav">
          <a href="index.html" data-i18n="nav.home" class="${page === "home" ? "is-active" : ""}"></a>
          <a href="services.html" data-i18n="nav.services" class="${page === "services" ? "is-active" : ""}"></a>
          <a href="about.html" data-i18n="nav.about" class="${page === "about" ? "is-active" : ""}"></a>
          <a href="contacts.html" data-i18n="nav.contacts" class="${page === "contacts" ? "is-active" : ""}"></a>
        </nav>
        <div class="header__side">
          <div class="lang"><button data-lang="ru">RU</button><span>/</span><button data-lang="en">EN</button></div>
          <a class="btn btn--ghost-light" href="${CONTACTS.dikidiUrl}" target="_blank" rel="noopener" data-i18n="btn.book"></a>
          <button class="burger" id="burger" aria-label="Menu"><span></span></button>
        </div>
      </div>
    </header>`;
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.outerHTML = `
    <footer class="footer">
      <div class="wrap">
        <div class="footer__grid">
          <div>
            <a class="brand" href="index.html">${MARK}<span class="brand__word">BARBERSHOP 1988</span></a>
            <p data-i18n="ft.about"></p>
          </div>
          <div>
            <h4 data-i18n="ft.nav"></h4>
            <ul>
              <li><a href="index.html" data-i18n="nav.home"></a></li>
              <li><a href="services.html" data-i18n="nav.services"></a></li>
              <li><a href="about.html" data-i18n="nav.about"></a></li>
              <li><a href="contacts.html" data-i18n="nav.contacts"></a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="ft.contacts"></h4>
            <ul>
              <li><a href="${WA_URL}" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="${TG_URL}" target="_blank" rel="noopener">Telegram</a></li>
              <li><a href="${CONTACTS.dikidiUrl}" target="_blank" rel="noopener">Dikidi</a></li>
              ${CONTACTS.phones.map((p) => `<li><a href="tel:${p[0]}">${p[1]}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h4 data-i18n="ft.visit"></h4>
            <ul>
              <li data-i18n="ft.address"></li>
              <li data-i18n="ft.hours"></li>
              <li data-i18n="ft.branch"></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom"><span data-i18n="ft.rights"></span><span data-i18n="ft.demo"></span></div>
      </div>
    </footer>
    <div class="float">
      <a class="float__book" href="${CONTACTS.dikidiUrl}" target="_blank" rel="noopener"><span data-i18n="btn.book"></span></a>
      <a href="${WA_URL}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.wa}<span class="float__label">WhatsApp</span></a>
      <a href="${TG_URL}" target="_blank" rel="noopener" aria-label="Telegram">${ICONS.tg}<span class="float__label">Telegram</span></a>
    </div>`;
  }

  // Логотипы-знаки в разметке страниц
  document.querySelectorAll("[data-mark]").forEach((el) => (el.outerHTML = markSvg(el.dataset.mark, el.hasAttribute("data-mono"))));

  // Кнопки мессенджеров в контенте
  document.querySelectorAll("[data-dk]").forEach((a) => {
    a.href = CONTACTS.dikidiUrl; a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = WA_URL; a.target = "_blank"; a.rel = "noopener";
    a.insertAdjacentHTML("afterbegin", ICONS.wa);
  });
  document.querySelectorAll("[data-tg]").forEach((a) => {
    a.href = TG_URL; a.target = "_blank"; a.rel = "noopener";
    a.insertAdjacentHTML("afterbegin", ICONS.tg);
  });
}

/* ===== Языки ===== */
function getLang() {
  try { return localStorage.getItem("b1988-lang") || "ru"; } catch (e) { return "ru"; }
}
function setLang(lang) {
  const dict = window.B1988_I18N[lang] || window.B1988_I18N.ru;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) {
      // сохраняем иконку внутри кнопок мессенджеров
      const icon = el.querySelector("svg");
      el.innerHTML = v;
      if (icon) el.prepend(icon);
    }
  });
  const titleKey = document.body.dataset.title;
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
  try { localStorage.setItem("b1988-lang", lang); } catch (e) {}
}

/* ===== Поведение ===== */
function initHeader() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("is-solid", window.scrollY > 60);
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  header.addEventListener("transitionend", onScroll);

  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => document.body.classList.toggle("menu-open"));
  document.querySelectorAll("#nav a").forEach((a) =>
    a.addEventListener("click", () => document.body.classList.remove("menu-open"))
  );
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
}

function initSubnav() {
  const links = document.querySelectorAll(".subnav a");
  if (!links.length) return;
  const sections = [...links].map((a) => document.querySelector(a.getAttribute("href")));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && io.observe(s));
}

renderChrome();
setLang(getLang());
initHeader();
initSubnav();

// «Чтение»: текст по ходу прокрутки сам подсвечивается слово за словом; под курсором слова светятся рядом с ним
(function () {
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SEL = ".h1, .h2, .h3, .text--lead, .hero__line, .faq__item summary, main .text";
  const SKIP = ".footer, .sr-only, .prices, .p-desc, .p-name, .float, .btn, .master .text";
  const DIM = [190, 172, 150, .5], DONE = [235, 220, 203, 1], HOT = [255, 226, 174, 1];
  const els = [];
  let queue = Promise.resolve();

  function split(el) {
    if (el.querySelector(".rd-w")) return;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.nodeValue.split(/(\s+)/).forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
            else { const s = document.createElement("span"); s.className = "rd-w"; s.textContent = p; frag.appendChild(s); }
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    };
    walk(el);
  }
  function build() {
    document.querySelectorAll(SEL).forEach((el) => {
      if (el.closest(SKIP) || el.querySelector(".rd-w")) return;
      split(el); el.classList.add("rd-el");
      if (reduce) el.querySelectorAll(".rd-w").forEach((w) => w.classList.add("rd-done"));
      if (!els.includes(el)) els.push(el);
    });
    if (!reduce) els.forEach((el) => { if (el.dataset.rdState === "read") el.querySelectorAll(".rd-w").forEach((w) => w.classList.add("rd-done")); else io.observe(el); });
  }
  function read(el) {
    return new Promise((resolve) => {
      const words = [...el.querySelectorAll(".rd-w")];
      const per = el.matches(".h1, .h2, .h3, .hero__line") ? 230 : 130;
      const inView = () => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };
      if (!inView()) { words.forEach((w) => w.classList.add("rd-done")); el.dataset.rdState = "read"; return resolve(); }
      words.forEach((w, i) => setTimeout(() => {
        w.classList.add("rd-on");
        setTimeout(() => { w.classList.remove("rd-on"); w.classList.add("rd-done"); }, 420);
      }, i * per));
      el.dataset.rdState = "read";
      setTimeout(resolve, words.length * per + 120);
    });
  }
  const io = new IntersectionObserver((entries) => {
    entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top).forEach((e) => {
      io.unobserve(e.target);
      queue = queue.then(() => read(e.target));
    });
  }, { rootMargin: "0px 0px -16% 0px", threshold: 0.01 });

  // после смены языка тексты пересобираются — сразу светлые
  document.addEventListener("click", (e) => {
    if (!e.target.closest || !e.target.closest(".lang")) return;
    setTimeout(() => { els.length = 0; build(); document.querySelectorAll(".rd-el .rd-w").forEach((w) => w.classList.add("rd-done")); }, 120);
  });
  const start = () => setTimeout(build, 250);
  if (document.readyState === "complete") start(); else addEventListener("load", start);
})();
