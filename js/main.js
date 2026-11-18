/* ============================================================
   Apache Warrior Academy — js/main.js
   Shared JS: scroll-reveal, nav scroll, lightbox
   ============================================================ */

// ── Scroll-reveal (IntersectionObserver) ──
(function() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
})();

// ── Nav scroll state ──
(function() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── Mobile hamburger ──
(function() {
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
})();

// ── Back-to-top button ──
(function() {
  var btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ── Price tabs ──
(function() {
  var tabs   = document.querySelectorAll('.price-tab');
  var panels = document.querySelectorAll('.price-panel');
  if (!tabs.length) return;
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      panels.forEach(function(p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var target = document.getElementById('tab-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
})();

// ── Schedule view toggle (calendar / list) ──
(function() {
  var toggles  = document.querySelectorAll('.sched-toggle');
  var calView  = document.getElementById('schedCal');
  var listView = document.getElementById('schedList');
  if (!toggles.length) return;
  toggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      toggles.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var view = btn.dataset.view;
      if (calView)  calView.style.display  = (view === 'cal')  ? '' : 'none';
      if (listView) listView.style.display = (view === 'list') ? '' : 'none';
    });
  });
})();

// ── FAQ chip selectors ──
(function() {
  document.querySelectorAll('.faq-chips').forEach(function(group) {
    group.querySelectorAll('.chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        group.querySelectorAll('.chip').forEach(function(c) { c.classList.remove('selected'); });
        chip.classList.add('selected');
        var input = document.querySelector('input[name="' + group.dataset.name + '"]');
        if (input) input.value = chip.dataset.val;
      });
    });
  });
})();
