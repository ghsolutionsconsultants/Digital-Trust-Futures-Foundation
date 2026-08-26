/* Digital Trust Futures Foundation — site behaviour.
   No third-party libraries, no external requests, no tracking.
   Every enhancement degrades gracefully: the site is fully usable without JS. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── Theme ─────────────────────────────────────────────────────────────── */
  var root = document.documentElement;
  var STORE = 'dtff-theme';

  // Light is the default for everyone; dark is opt-in and remembered. The
  // operating-system setting is deliberately not consulted.
  function currentTheme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  function syncToggleLabel() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    $$('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', 'Switch to ' + next + ' theme');
      b.setAttribute('title', 'Switch to ' + next + ' theme');
    });
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', currentTheme() === 'dark' ? '#080F17' : '#F7F5F1');
  }

  $$('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
      syncToggleLabel();
    });
  });
  syncToggleLabel();

  /* ── Sticky header state + reading progress ────────────────────────────── */
  var header = $('#site-header');
  var progress = $('[data-progress]');
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ── Desktop dropdown navigation ───────────────────────────────────────── */
  var openItem = null;
  function closeNav(item) {
    if (!item) return;
    item.classList.remove('is-open');
    var t = $('[data-nav-trigger]', item);
    if (t) t.setAttribute('aria-expanded', 'false');
    if (openItem === item) openItem = null;
  }
  function openNav(item) {
    if (openItem && openItem !== item) closeNav(openItem);
    item.classList.add('is-open');
    var t = $('[data-nav-trigger]', item);
    if (t) t.setAttribute('aria-expanded', 'true');
    openItem = item;
  }

  $$('[data-nav-item]').forEach(function (item) {
    var trigger = $('[data-nav-trigger]', item);
    var hoverCapable = window.matchMedia('(hover: hover) and (min-width: 1080px)');
    var closeTimer;

    item.addEventListener('mouseenter', function () {
      if (!hoverCapable.matches) return;
      clearTimeout(closeTimer);
      openNav(item);
    });
    item.addEventListener('mouseleave', function () {
      if (!hoverCapable.matches) return;
      closeTimer = setTimeout(function () { closeNav(item); }, 160);
    });
    if (trigger) {
      // Keyboard / touch: first activation opens the panel rather than navigating.
      trigger.addEventListener('click', function (e) {
        if (!window.matchMedia('(min-width: 1080px)').matches) return;
        if (!item.classList.contains('is-open')) { e.preventDefault(); openNav(item); }
      });
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          openNav(item);
          // The panel's visibility flips synchronously with .is-open, so the
          // first link can take focus immediately.
          var first = $('a', $('[data-nav-panel]', item));
          if (first) first.focus();
        }
      });
    }
    item.addEventListener('focusout', function (e) {
      if (!item.contains(e.relatedTarget)) closeNav(item);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (openItem) { var t = $('[data-nav-trigger]', openItem); closeNav(openItem); if (t) t.focus(); }
      if (mobileOpen) toggleMobile(false);
    }
  });
  document.addEventListener('click', function (e) {
    if (openItem && !openItem.contains(e.target)) closeNav(openItem);
  });

  /* ── Mobile navigation ─────────────────────────────────────────────────── */
  var menuBtn = $('[data-menu-toggle]');
  var mobileNav = $('[data-mobile-nav]');
  var mobileOpen = false;

  function toggleMobile(force) {
    mobileOpen = typeof force === 'boolean' ? force : !mobileOpen;
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(mobileOpen));
    if (mobileNav) mobileNav.classList.toggle('is-open', mobileOpen);
    document.body.classList.toggle('nav-open', mobileOpen);
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { toggleMobile(); });
  if (mobileNav) {
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') toggleMobile(false);
    });
  }
  window.addEventListener('resize', function () {
    if (mobileOpen && window.innerWidth >= 1080) toggleMobile(false);
  });

  /* ── Scroll reveal ─────────────────────────────────────────────────────── */
  var revealTargets = $$('[data-reveal], [data-reveal-stagger], [data-reveal-group]');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    revealTargets.forEach(function (el) { el.classList.add('is-revealed'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ── Resource / project filtering ──────────────────────────────────────── */
  $$('[data-filter-scope]').forEach(function (scope) {
    var chips = $$('[data-filter]', scope);
    var items = $$('[data-tags]', scope);
    var counter = $('[data-filter-count]', scope);
    var empty = $('[data-filter-empty]', scope);

    function apply(value) {
      var shown = 0;
      items.forEach(function (item) {
        var tags = (item.getAttribute('data-tags') || '').split(/\s+/);
        var match = value === 'all' || tags.indexOf(value) !== -1;
        item.classList.toggle('is-hidden', !match);
        if (match) shown++;
      });
      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', String(c.getAttribute('data-filter') === value));
      });
      if (counter) counter.textContent = shown + (shown === 1 ? ' item' : ' items');
      if (empty) empty.classList.toggle('is-hidden', shown !== 0);
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () { apply(chip.getAttribute('data-filter')); });
    });
    apply('all');
  });

  /* ── Enquiry form ────────────────────────────────────────────────────────
     The form posts natively to Web3Forms, so it works with JavaScript off.
     This only mirrors the chosen topic back to the reader so they can see how
     their message will be labelled when it arrives. */
  $$('[data-route-form]').forEach(function (form) {
    var select = $('[data-route-select]', form);
    var out = $('[data-route-target]', form);
    if (!select || !out) return;

    function update() {
      var opt = select.options[select.selectedIndex];
      if (!opt) return;
      var label = opt.textContent.trim();
      out.innerHTML = 'Your message will arrive labelled <strong>' + label + '</strong>, so it reaches the right ' +
        'person on our side.';
    }
    select.addEventListener('change', update);
    update();
  });

  /* ── Hero lattice ──────────────────────────────────────────────────────────
     A slow, low-contrast network of nodes and links. Purely decorative:
     it is aria-hidden, pauses off-screen, and is disabled for reduced motion. */
  var canvas = $('[data-hero-canvas]');
  if (canvas && canvas.getContext && !reduceMotion.matches) {
    var ctx = canvas.getContext('2d');
    var nodes = [], links = [], pulses = [], w = 0, h = 0, dpr = 1, raf = null, visible = true;

    function resize() {
      var rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      var density = Math.max(16, Math.min(46, Math.round((w * h) / 26000)));
      nodes = [];
      for (var i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.09,
          vy: (Math.random() - 0.5) * 0.09,
          r: Math.random() * 1.5 + 0.9,
          hub: Math.random() < 0.16
        });
      }
      pulses = [];
    }

    function step() {
      if (!visible) { raf = null; return; }
      ctx.clearRect(0, 0, w, h);
      var maxDist = Math.min(210, Math.max(120, w / 7));
      links = [];

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
      }

      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            var o = (1 - d / maxDist) * 0.34;
            ctx.strokeStyle = 'rgba(142, 210, 213, ' + o.toFixed(3) + ')';
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
            links.push([a, b]);
          }
        }
      }

      for (var j = 0; j < nodes.length; j++) {
        var p = nodes[j];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.hub ? p.r * 1.9 : p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hub ? 'rgba(232, 123, 60, .78)' : 'rgba(196, 224, 232, .5)';
        ctx.fill();
        if (p.hub) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 5.2, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(232, 123, 60, .17)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      if (links.length && pulses.length < 4 && Math.random() < 0.022) {
        pulses.push({ link: links[Math.floor(Math.random() * links.length)], t: 0 });
      }
      for (var k = pulses.length - 1; k >= 0; k--) {
        var pu = pulses[k];
        pu.t += 0.011;
        if (pu.t >= 1) { pulses.splice(k, 1); continue; }
        var A = nodes[pu.link[0]], B = nodes[pu.link[1]];
        if (!A || !B) { pulses.splice(k, 1); continue; }
        var px = A.x + (B.x - A.x) * pu.t, py = A.y + (B.y - A.y) * pu.t;
        var fade = Math.sin(pu.t * Math.PI);
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 214, 179, ' + (fade * 0.9).toFixed(3) + ')';
        ctx.fill();
      }

      raf = window.requestAnimationFrame(step);
    }

    function start() { if (!raf) { visible = true; raf = window.requestAnimationFrame(step); } }
    function stop() { visible = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

    resize();
    start();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt); rt = setTimeout(resize, 180);
    });
    document.addEventListener('visibilitychange', function () {
      document.hidden ? stop() : start();
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? start() : stop();
      }, { threshold: 0 }).observe(canvas);
    }
  }

  /* ── In-page section navigation (long pages) ───────────────────────────── */
  var sectionNav = $('[data-section-nav]');
  if (sectionNav && 'IntersectionObserver' in window) {
    var navLinks = $$('a', sectionNav);
    var targets = navLinks.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    }).filter(Boolean);
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute('aria-current', a.getAttribute('href') === '#' + entry.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    targets.forEach(function (t) { so.observe(t); });
  }

  /* ── Current year ──────────────────────────────────────────────────────── */
  $$('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
