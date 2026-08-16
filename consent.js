(function () {
    const STORAGE_KEY = 'pagina_virada_consent';

    function updateConsent(status) {
        const granted = status === 'accepted' ? 'granted' : 'denied';
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                ad_storage: granted,
                ad_user_data: granted,
                ad_personalization: granted,
                analytics_storage: granted,
                functionality_storage: 'granted',
                personalization_storage: granted,
                security_storage: 'granted'
            });
        }
    }

    function saveConsent(status) {
        localStorage.setItem(STORAGE_KEY, status);
        updateConsent(status);
        document.getElementById('consent-banner')?.classList.remove('show');
    }

    function createBanner() {
        if (document.getElementById('consent-banner')) return;
        const prefix = location.pathname.includes('/artigos/') ? '../' : '';
        const banner = document.createElement('div');
        banner.className = 'consent-banner';
        banner.id = 'consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Preferências de privacidade');
        banner.innerHTML = `
            <div class="consent-content">
                <div class="consent-text">
                    <h3>Respeitamos sua privacidade</h3>
                    <p>Usamos cookies para medir o funcionamento do site e, quando autorizado, exibir anúncios. Consulte a <a href="${prefix}politica-privacidade.html">Política de Privacidade</a>.</p>
                </div>
                <div class="consent-actions">
                    <button type="button" class="consent-btn consent-btn-reject" id="consent-reject">Recusar opcionais</button>
                    <button type="button" class="consent-btn consent-btn-accept" id="consent-accept">Aceitar</button>
                </div>
            </div>`;
        document.body.appendChild(banner);
        document.getElementById('consent-accept').addEventListener('click', () => saveConsent('accepted'));
        document.getElementById('consent-reject').addEventListener('click', () => saveConsent('rejected'));
        requestAnimationFrame(() => banner.classList.add('show'));
    }

    document.addEventListener('DOMContentLoaded', function () {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'accepted' || stored === 'rejected') updateConsent(stored);
        else createBanner();
    });
})();
