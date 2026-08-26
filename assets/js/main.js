/* ============================================================
   MEDALS WAY — طريق الأوسمة | main.js
   ============================================================ */
(function () {
  "use strict";

  /* ----------------------------------------------------------
     DATA (bilingual) — awards, medal categories, clients
     ---------------------------------------------------------- */
  var LOGO_DIR = "assets/logos/";
  // In the self-contained preview build, window.__LOGO_DATA maps filenames to data URIs.
  function logoSrc(name) {
    return (window.__LOGO_DATA && window.__LOGO_DATA[name]) || (LOGO_DIR + name);
  }

  var AWARDS = [
    { ar: "برنامج دبي للأداء الحكومي المتميز", en: "Dubai Government Excellence Program (DGEP)", lvlAr: "إمارة دبي", lvlEn: "Dubai", logo: "dgep", light: true },
    { ar: "جائزة الشيخ خليفة للامتياز", en: "Sheikh Khalifa Excellence Award (SKEA)", lvlAr: "وطني", lvlEn: "National", logo: "skea", light: true },
    { ar: "جائزة أبوظبي للأداء الحكومي المتميز", en: "Abu Dhabi Award for Excellence in Government Performance", lvlAr: "أبوظبي", lvlEn: "Abu Dhabi", logo: "adaep", light: true },
    { ar: "جائزة القائد العام لشرطة دبي للتميز", en: "Dubai Police Commander-General Award for Excellence", lvlAr: "شرطة دبي", lvlEn: "Dubai Police", logo: "dubaipolice", light: true },
    { ar: "جائزة وزير الداخلية للتميز", en: "Minister of Interior Excellence Award", lvlAr: "اتحادي", lvlEn: "Federal", logo: "moi", light: true },
    { ar: "جائزة أبوظبي للتميز في دمج أصحاب الهمم", en: "Abu Dhabi Excellence Award for People of Determination Inclusion", lvlAr: "أبوظبي", lvlEn: "Abu Dhabi", logo: "adaep_pod", light: true },
    { ar: "جوائز التميز الداخلية للجهات", en: "Entities' Internal Excellence Awards", lvlAr: "داخلي", lvlEn: "Internal", logo: null },
    { ar: "جوائز الناموس — ديوا وهيئة الطرق والمواصلات", en: "Namous Awards — DEWA & RTA", lvlAr: "داخلي", lvlEn: "Internal", logo: null }
  ];

  var MEDALS = [
    { ar: "وسام دبي للموظف المبتكر", en: "Innovative Employee Medal" },
    { ar: "وسام دبي للموظف الإشرافي", en: "Supervisory Employee Medal" },
    { ar: "وسام دبي للموظف الشاب", en: "Young Employee Medal" },
    { ar: "وسام دبي لموظف إسعاد المتعاملين", en: "Customer-Happiness Employee Medal" },
    { ar: "وسام دبي للموظف الميداني", en: "Field Employee Medal" },
    { ar: "وسام دبي للموظف الإداري", en: "Administrative Employee Medal" },
    { ar: "وسام دبي للموظف التخصصي", en: "Specialized Employee Medal" },
    { ar: "وسام مساعد المدير العام / المدير التنفيذي", en: "Assistant DG / CEO Medal" },
    { ar: "تكريم خاص — الجندي المجهول", en: "Special Recognition — Unknown Soldier" }
  ];

  var CLIENTS = [
    { ar: "هيئة كهرباء ومياه دبي", en: "Dubai Electricity & Water Authority (DEWA)", logo: "dewa" },
    { ar: "هيئة الطرق والمواصلات", en: "Roads & Transport Authority (RTA)", logo: "rta" },
    { ar: "القيادة العامة لشرطة أبوظبي", en: "Abu Dhabi Police GHQ", logo: "adpolice" },
    { ar: "وزارة الخارجية", en: "Ministry of Foreign Affairs", logo: "mofa" },
    { ar: "وزارة الصحة ووقاية المجتمع", en: "Ministry of Health & Prevention", logo: "moh" },
    { ar: "الاتحادية للماء والكهرباء", en: "Etihad Water & Electricity", logo: "etihadwe" },
    { ar: "هيئة البيئة — أبوظبي", en: "Environment Agency — Abu Dhabi", logo: "ead" },
    { ar: "شركة أبوظبي الوطنية للمعارض (أدنيك)", en: "ADNEC Group", logo: "adnec" },
    { ar: "دائرة التنمية الاقتصادية", en: "Department of Economic Development", logo: "ded" },
    { ar: "دائرة الأراضي والأملاك", en: "Dubai Land Department", logo: "dld" },
    { ar: "دائرة النقل", en: "Department of Transport", logo: "dot" }
  ];

  var isEN = false;

  /* ----------------------------------------------------------
     Fallback emblem for missing logos
     ---------------------------------------------------------- */
  function emblemHTML() {
    return '<svg viewBox="0 0 270 330" style="height:80px"><use href="#mw-mark"/></svg>';
  }
  function attachFallback(img) {
    img.addEventListener("error", function () {
      var holder = img.parentElement;
      holder.classList.remove("on-light");
      holder.innerHTML = emblemHTML();
    });
  }

  /* ----------------------------------------------------------
     Render: awards
     ---------------------------------------------------------- */
  function renderAwards() {
    var grid = document.getElementById("awardGrid");
    if (!grid) return;
    grid.innerHTML = "";
    AWARDS.forEach(function (a, i) {
      var card = document.createElement("div");
      card.className = "award-card rv rv-d" + ((i % 4) + 1);
      var logoHTML;
      if (a.logo) {
        logoHTML = '<div class="award-logo' + (a.light ? " on-light" : "") + '">' +
          '<img loading="lazy" src="' + logoSrc(a.logo) + '" alt="' + (isEN ? a.en : a.ar) + '"></div>';
      } else {
        logoHTML = '<div class="award-logo">' + emblemHTML() + "</div>";
      }
      card.innerHTML = logoHTML +
        "<h3>" + (isEN ? a.en : a.ar) + "</h3>" +
        '<div class="en-name">' + (isEN ? a.ar : a.en) + "</div>" +
        '<div class="lvl">' + (isEN ? a.lvlEn : a.lvlAr) + "</div>";
      grid.appendChild(card);
      var img = card.querySelector("img");
      if (img) attachFallback(img);
    });
    observeReveals(grid);
  }

  /* ----------------------------------------------------------
     Render: medal chips
     ---------------------------------------------------------- */
  var MEDAL_IC = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"/></svg>';
  function renderMedals() {
    var band = document.getElementById("medalBand");
    if (!band) return;
    band.innerHTML = "";
    MEDALS.forEach(function (m, i) {
      var chip = document.createElement("div");
      chip.className = "medal-chip rv rv-d" + ((i % 3) + 1);
      chip.innerHTML = '<span class="m-ic">' + MEDAL_IC + "</span>" +
        "<span><b>" + (isEN ? m.en : m.ar) + "</b><small>" + (isEN ? m.ar : m.en) + "</small></span>";
      band.appendChild(chip);
    });
    observeReveals(band);
  }

  /* ----------------------------------------------------------
     Render: clients marquee (two rows, duplicated for loop)
     ---------------------------------------------------------- */
  function clientCard(c) {
    var d = document.createElement("div");
    d.className = "client-card";
    var logoHTML = c.logo
      ? '<div class="client-logo"><img loading="lazy" src="' + logoSrc(c.logo) + '" alt="' + (isEN ? c.en : c.ar) + '"></div>'
      : '<div class="client-logo" style="background:transparent">' + emblemHTML() + "</div>";
    d.innerHTML = logoHTML + "<b>" + (isEN ? c.en : c.ar) + "</b>";
    var img = d.querySelector("img");
    if (img) {
      img.addEventListener("error", function () {
        var holder = img.parentElement;
        holder.style.background = "transparent";
        holder.innerHTML = emblemHTML();
      });
    }
    return d;
  }
  function renderClients() {
    var a = document.getElementById("clientsTrackA");
    var b = document.getElementById("clientsTrackB");
    if (!a || !b) return;
    a.innerHTML = ""; b.innerHTML = "";
    var half = Math.ceil(CLIENTS.length / 2);
    var rowA = CLIENTS.slice(0, half);
    var rowB = CLIENTS.slice(half);
    // duplicate each row twice for a seamless -50% loop
    [0, 1].forEach(function () { rowA.forEach(function (c) { a.appendChild(clientCard(c)); }); });
    [0, 1].forEach(function () { rowB.forEach(function (c) { b.appendChild(clientCard(c)); }); });
  }

  /* ----------------------------------------------------------
     Reveal on scroll
     ---------------------------------------------------------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function observeReveals(root) {
    (root || document).querySelectorAll(".rv:not(.in)").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ----------------------------------------------------------
     Counters
     ---------------------------------------------------------- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var t0 = null, dur = 1700;
    function frame(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".num[data-count]").forEach(function (el) { counterObserver.observe(el); });

  /* ----------------------------------------------------------
     Header, scrollbar, to-top, nav highlighting
     ---------------------------------------------------------- */
  var header = document.getElementById("header");
  var scrollbar = document.getElementById("scrollbar");
  var toTop = document.getElementById("to-top");

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    scrollbar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll("#nav a");
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        navLinks.forEach(function (l) {
          l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ----------------------------------------------------------
     Mobile menu
     ---------------------------------------------------------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
  navLinks.forEach(function (l) {
    l.addEventListener("click", function () {
      burger.classList.remove("open");
      nav.classList.remove("open");
    });
  });

  /* ----------------------------------------------------------
     Service-card pointer glow
     ---------------------------------------------------------- */
  document.querySelectorAll(".svc-card").forEach(function (card) {
    card.addEventListener("pointermove", function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  });

  /* ----------------------------------------------------------
     Hero particles — floating gold dust
     ---------------------------------------------------------- */
  (function particles() {
    var canvas = document.getElementById("particles");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dots = [], W, H, raf;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    function resize() {
      W = canvas.width = canvas.offsetWidth * devicePixelRatio;
      H = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    function spawn() {
      dots = [];
      var count = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16000));
      for (var i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * W, y: Math.random() * H,
          r: (Math.random() * 1.6 + 0.5) * devicePixelRatio,
          vy: -(Math.random() * 0.28 + 0.06) * devicePixelRatio,
          vx: (Math.random() - 0.5) * 0.12 * devicePixelRatio,
          a: Math.random() * 0.55 + 0.1,
          tw: Math.random() * Math.PI * 2
        });
      }
    }
    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.y += d.vy; d.x += d.vx; d.tw += 0.02;
        if (d.y < -10) { d.y = H + 10; d.x = Math.random() * W; }
        if (d.x < -10) d.x = W + 10; else if (d.x > W + 10) d.x = -10;
        var alpha = d.a * (0.65 + 0.35 * Math.sin(d.tw));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(232, 193, 90," + alpha.toFixed(3) + ")";
        ctx.shadowColor = "rgba(232,193,90,.8)";
        ctx.shadowBlur = 6 * devicePixelRatio;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    }
    function boot() { resize(); spawn(); cancelAnimationFrame(raf); tick(); }
    window.addEventListener("resize", boot);
    boot();
  })();

  /* ----------------------------------------------------------
     Language toggle (AR <-> EN)
     ---------------------------------------------------------- */
  var langBtn = document.getElementById("langToggle");

  function storeArabicOriginals() {
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.hasAttribute("data-ar")) el.setAttribute("data-ar", el.innerHTML);
    });
    document.querySelectorAll("[data-en-html]").forEach(function (el) {
      if (!el.hasAttribute("data-ar-html")) el.setAttribute("data-ar-html", el.innerHTML);
    });
  }

  function applyLang() {
    var html = document.documentElement;
    html.setAttribute("lang", isEN ? "en" : "ar");
    html.setAttribute("dir", isEN ? "ltr" : "rtl");
    langBtn.textContent = isEN ? "عربي" : "EN";
    document.title = isEN
      ? "Medals Way | طريق الأوسمة — Excellence & Medals-Awards Consulting"
      : "طريق الأوسمة | Medals Way — استشارات التميز وجوائز الأوسمة";

    document.querySelectorAll("[data-en]").forEach(function (el) {
      el.innerHTML = isEN ? el.getAttribute("data-en") : el.getAttribute("data-ar");
    });
    document.querySelectorAll("[data-en-html]").forEach(function (el) {
      el.innerHTML = isEN ? el.getAttribute("data-en-html") : el.getAttribute("data-ar-html");
    });
    document.querySelectorAll("[data-en-ph]").forEach(function (el) {
      el.setAttribute("placeholder", isEN ? el.getAttribute("data-en-ph") : el.getAttribute("data-ph"));
    });
    renderAwards();
    renderMedals();
    renderClients();
    // reveal instantly anything already on screen after re-render
    document.querySelectorAll(".rv:not(.in)").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("in");
    });
  }

  langBtn.addEventListener("click", function () {
    isEN = !isEN;
    applyLang();
  });

  /* ----------------------------------------------------------
     Contact form -> WhatsApp
     ---------------------------------------------------------- */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lines = isEN
        ? ["Hello Medals Way 👋", "Name: " + f.get("name"), "Entity: " + (f.get("org") || "—"),
           "Phone: " + f.get("phone"), "Service: " + f.get("service"), "Message: " + (f.get("msg") || "—")]
        : ["مرحباً طريق الأوسمة 👋", "الاسم: " + f.get("name"), "الجهة: " + (f.get("org") || "—"),
           "الهاتف: " + f.get("phone"), "الخدمة: " + f.get("service"), "الرسالة: " + (f.get("msg") || "—")];
      window.open("https://wa.me/971505639940?text=" + encodeURIComponent(lines.join("\n")), "_blank");
    });
  }

  /* ----------------------------------------------------------
     Boot
     ---------------------------------------------------------- */
  storeArabicOriginals();
  renderAwards();
  renderMedals();
  renderClients();
  observeReveals(document);

  window.addEventListener("load", function () {
    var pl = document.getElementById("preloader");
    setTimeout(function () { pl.classList.add("done"); }, 450);
  });
  // safety: never trap the user behind the preloader
  setTimeout(function () {
    document.getElementById("preloader").classList.add("done");
  }, 3500);
})();
