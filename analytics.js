/* Página Virada — GA4 próprio.
   Só carrega quando window.GA4_ID estiver definido (criar a propriedade GA4 do pmorollo.com).
   Ex.: window.GA4_ID = "G-XXXXXXXXXX";
   Ao ativar, respeita o Consent Mode v2 já definido em consent.js (analytics_storage). */
(function () {
  window.GA4_ID = window.GA4_ID || "";
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () { window.dataLayer.push(arguments); };
  }

  window.pvEvent = function (name, params) {
    if (window.GA4_ID && typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  };

  if (window.GA4_ID) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + window.GA4_ID;
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", window.GA4_ID);
  }

  /* Ensaio lido */
  if (/\/artigos\/[^/]+\.html$/.test(location.pathname)) {
    window.pvEvent("view_article", { page_path: location.pathname });
  }

  /* Scroll 75% */
  var done75 = false;
  document.addEventListener("scroll", function () {
    if (done75) return;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (h > 0 && window.scrollY / h >= 0.75) { done75 = true; window.pvEvent("scroll_75"); }
  }, { passive: true });

  /* Clique em compartilhar */
  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    var a = e.target.closest("a");
    if (a && /(share|compartilh|whatsapp|twitter|x\.com|facebook)/i.test(a.href + " " + (a.textContent || ""))) {
      window.pvEvent("click_share", { href: a.href });
    }
  });
})();
