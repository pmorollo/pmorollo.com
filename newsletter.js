/* Página Virada — newsletter (stack próprio).
   O endpoint é configurável em window.NEWSLETTER_ENDPOINT e deve apontar para o
   serviço próprio de captura quando ele estiver no ar.
   Ex.: window.NEWSLETTER_ENDPOINT = "https://newsletter.pmorollo.com/api/subscribe"; */
(function () {
  window.NEWSLETTER_ENDPOINT = window.NEWSLETTER_ENDPOINT ||
    "https://newsletter-api-production-187e.up.railway.app/api/subscribe";

  window.handleNewsletter = function (form) {
    var note = form.parentNode.querySelector(".newsletter-note");
    var input = form.querySelector("input[type=email]");
    var email = input ? input.value.trim() : "";

    function show(msg) { if (note) { note.hidden = false; note.textContent = msg; } }

    if (!email || email.indexOf("@") < 0) { show("Informe um e-mail válido."); return false; }

    if (!window.NEWSLETTER_ENDPOINT) {
      show("A lista entra no ar em breve. Obrigado pelo interesse!");
      return false;
    }

    fetch(window.NEWSLETTER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, origem: location.pathname })
    }).then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      if (typeof window.pvEvent === "function") window.pvEvent("newsletter_subscribe");
      var cta = form.closest(".newsletter-cta") || form.parentNode;
      cta.innerHTML = '<h3 style="font-family:var(--font-heading,serif);margin-bottom:8px">Pronto!</h3>' +
        '<p style="color:var(--text-secondary,#555)">Confira seu e-mail para confirmar a inscrição.</p>';
    }).catch(function () {
      show("Não foi possível agora. Tente novamente.");
    });

    return false;
  };
})();
