// ============================================
// INTENTION HOLISTIC HEALTH — Cookie Preferences UI (opt-out model)
// ============================================
//
// Consent is RESOLVED and APPLIED inline in each page <head> (Part 1):
// analytics + advertising are ON by default, honoring an explicit opt-out
// stored in localStorage and the browser Global Privacy Control (GPC) signal.
// The GA4 loader and the Google Ads conversion event also live inline in the
// head so consent is set before GA loads.
//
// This file adds only the ongoing opt-out CHROME:
//   - a one-time first-visit notice (auto-dismisses after ~10s),
//   - a persistent floating cookie icon,
//   - a preferences panel with an analytics/advertising toggle,
//   - a "Cookie Preferences" link injected into the footer legal links.
//
// localStorage key `cookie_consent` holds 'accepted' | 'declined' — the same
// values the head resolve logic reads. Do not change these values here.

(function () {
  // Shared dataLayer / gtag (already defined inline in the head; guard anyway).
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  var COOKIE_CONSENT_KEY = 'cookie_consent';    // 'accepted' | 'declined' (explicit choice)
  var COOKIE_NOTICE_KEY = 'cookie_notice_seen'; // 'true' once the first-visit notice is dismissed

  // Mirrors the head resolve logic: explicit choice wins, then GPC, else default ON.
  function cookieResolveConsent() {
    var choice = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (choice === 'accepted' || choice === 'declined') return choice;
    if (navigator.globalPrivacyControl === true) return 'declined'; // honor GPC opt-out
    return 'accepted'; // opt-out default: on unless the visitor opts out
  }

  function cookieApplyConsent(state) {
    var granted = state === 'accepted';
    gtag('consent', 'update', {
      'analytics_storage': granted ? 'granted' : 'denied',
      'ad_storage': granted ? 'granted' : 'denied',
      'ad_user_data': granted ? 'granted' : 'denied',
      'ad_personalization': granted ? 'granted' : 'denied'
    });
  }

  function cookieSetConsent(state) {
    localStorage.setItem(COOKIE_CONSENT_KEY, state);
    localStorage.setItem(COOKIE_NOTICE_KEY, 'true');
    cookieApplyConsent(state);
    gtag('event', 'cookie_consent', { 'event_category': 'consent', 'event_label': state });
    cookieSyncToggle();
  }

  function cookieSyncToggle() {
    var toggle = document.getElementById('cookieToggleAA');
    if (toggle) toggle.checked = cookieResolveConsent() === 'accepted';
  }

  // ----------------------------------------
  // Preferences panel
  // ----------------------------------------
  function openCookiePanel(e) {
    if (e) e.stopPropagation();
    var panel = document.getElementById('cookiePanel');
    var fab = document.getElementById('cookieFab');
    if (!panel) return;
    cookieSyncToggle();
    panel.inert = false;
    panel.classList.add('is-open');
    if (fab) fab.setAttribute('aria-expanded', 'true');
    dismissCookieNotice();
  }

  function closeCookiePanel() {
    var panel = document.getElementById('cookiePanel');
    var fab = document.getElementById('cookieFab');
    if (!panel) return;
    // Return focus to the trigger before making the panel inert, so focus is
    // never retained inside an element hidden from assistive technology.
    if (panel.contains(document.activeElement) && fab) fab.focus();
    panel.classList.remove('is-open');
    panel.inert = true;
    if (fab) fab.setAttribute('aria-expanded', 'false');
  }

  // ----------------------------------------
  // First-visit notice
  // ----------------------------------------
  var cookieNoticeTimer = null;

  function dismissCookieNotice() {
    var notice = document.getElementById('cookieNotice');
    if (!notice) return;
    if (cookieNoticeTimer) { clearTimeout(cookieNoticeTimer); cookieNoticeTimer = null; }
    notice.classList.remove('show');
    setTimeout(function () { if (notice.parentNode) notice.parentNode.removeChild(notice); }, 300);
  }

  function showCookieNotice() {
    // Mark as shown so the proactive notice appears once, ever. Ongoing notice +
    // opt-out remain available via the cookie icon, footer link, and privacy policy.
    localStorage.setItem(COOKIE_NOTICE_KEY, 'true');
    var notice = document.createElement('div');
    notice.id = 'cookieNotice';
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Cookie notice');
    notice.innerHTML =
      '<p>We use cookies for analytics and advertising. You can opt out anytime.</p>' +
      '<div class="cookie-notice-actions">' +
        '<button type="button" class="cookie-link-btn" id="cookieNoticeManage">Manage</button>' +
        '<button type="button" class="cookie-btn cookie-btn-primary" id="cookieNoticeGotIt">Got it</button>' +
      '</div>';
    document.body.appendChild(notice);
    requestAnimationFrame(function () { notice.classList.add('show'); });
    document.getElementById('cookieNoticeManage').addEventListener('click', openCookiePanel);
    document.getElementById('cookieNoticeGotIt').addEventListener('click', function (e) {
      e.stopPropagation();
      dismissCookieNotice();
    });

    // Auto-dismiss after 10s if the visitor doesn't act. The persistent cookie
    // icon + footer link remain available either way.
    cookieNoticeTimer = setTimeout(dismissCookieNotice, 10000);
  }

  // ----------------------------------------
  // Build the UI
  // ----------------------------------------
  function buildCookieUI() {
    // Floating cookie icon (always present)
    var fab = document.createElement('button');
    fab.type = 'button';
    fab.id = 'cookieFab';
    fab.className = 'cookie-fab';
    fab.setAttribute('aria-label', 'Cookie preferences');
    fab.setAttribute('aria-expanded', 'false');
    fab.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/><circle cx="9" cy="10" r=".6" fill="currentColor"/><circle cx="14.5" cy="13.5" r=".6" fill="currentColor"/><circle cx="9.5" cy="15" r=".6" fill="currentColor"/><circle cx="12.5" cy="8" r=".6" fill="currentColor"/></svg>';
    document.body.appendChild(fab);

    // Preferences panel
    var panel = document.createElement('div');
    panel.id = 'cookiePanel';
    panel.className = 'cookie-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Cookie preferences');
    panel.inert = true; // closed by default — not focusable, hidden from assistive tech
    panel.innerHTML =
      '<div class="cookie-panel-head">' +
        '<h2 class="cookie-panel-title">Cookie Preferences</h2>' +
        '<button type="button" class="cookie-panel-close" id="cookiePanelClose" aria-label="Close">&times;</button>' +
      '</div>' +
      '<p class="cookie-panel-text">We use cookies for analytics and advertising, which can include sharing data with third-party partners for measurement and advertising. Your data is never sold. You can opt out anytime.</p>' +
      '<div class="cookie-toggle-row">' +
        '<div class="cookie-toggle-copy"><div class="cookie-toggle-label">Analytics &amp; advertising</div><div class="cookie-toggle-sub">Measures site traffic and supports relevant advertising.</div></div>' +
        '<label class="cookie-switch"><input type="checkbox" id="cookieToggleAA"><span class="cookie-slider"></span></label>' +
      '</div>' +
      '<div class="cookie-panel-actions">' +
        '<button type="button" class="cookie-btn cookie-btn-primary" id="cookieSave">Save preferences</button>' +
      '</div>' +
      '<a class="cookie-panel-link" href="/legal/privacy.html">Privacy Policy</a>';
    document.body.appendChild(panel);

    // Wire interactions
    fab.addEventListener('click', function (e) {
      e.stopPropagation();
      if (panel.classList.contains('is-open')) closeCookiePanel(); else openCookiePanel();
    });
    document.getElementById('cookiePanelClose').addEventListener('click', closeCookiePanel);
    document.getElementById('cookieSave').addEventListener('click', function () {
      var on = document.getElementById('cookieToggleAA').checked;
      cookieSetConsent(on ? 'accepted' : 'declined');
      closeCookiePanel();
    });

    // Close on outside click / Escape
    document.addEventListener('click', function (e) {
      if (!panel.classList.contains('is-open')) return;
      if (panel.contains(e.target) || fab.contains(e.target)) return;
      closeCookiePanel();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) closeCookiePanel();
    });

    // Footer "Cookie Preferences" link (second opt-out entry point).
    // Injected as an <a> so it inherits the existing footer-legal link styling.
    var legal = document.querySelector('.footer-legal-links');
    if (legal) {
      var link = document.createElement('a');
      link.className = 'footer-cookie-link';
      link.setAttribute('role', 'button');
      link.setAttribute('tabindex', '0');
      link.textContent = 'Cookie Preferences';
      link.addEventListener('click', openCookiePanel);
      link.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCookiePanel(e); }
      });
      legal.appendChild(link);
    }

    cookieSyncToggle();

    // First-visit notice — shown once, ever. The cookie icon, footer link, and
    // privacy policy provide ongoing notice + opt-out thereafter.
    if (localStorage.getItem(COOKIE_NOTICE_KEY) !== 'true') {
      showCookieNotice();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildCookieUI);
  } else {
    buildCookieUI();
  }
})();
