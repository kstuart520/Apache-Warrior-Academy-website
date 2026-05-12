/* ============================================================
   APACHE WARRIOR ACADEMY — js/main.js
   ============================================================ */

// ── Nav scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger menu ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Scroll reveal ──────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Pricing Tabs ───────────────────────────────────────────
document.querySelectorAll('.price-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.price-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.price-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('tab-' + target);
    if (panel) {
      panel.classList.add('active');
      panel.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 80);
      });
    }
  });
});

// ── FAQ Chips (single-select per group) ───────────────────
document.querySelectorAll('.faq-chips').forEach(group => {
  const name = group.dataset.name;
  const hiddenInput = document.getElementById('val-' + name);
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      if (hiddenInput) hiddenInput.value = chip.dataset.val;
    });
  });
});

// ── Formspree contact form ─────────────────────────────────
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.reset();
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data.errors
          ? data.errors.map(e => e.message).join(', ')
          : 'Something went wrong. Please email us directly.';
        alert(msg);
        btn.textContent = originalText;
        btn.disabled = false;
      }
    } catch {
      alert('Network error — please email apachewarrioracademy@gmail.com or call (508) 905-9867');
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

// ── Schedule view toggle (List ↔ Calendar) ─────────────────
const toggleList = document.getElementById('toggleList');
const toggleCal  = document.getElementById('toggleCal');
const schedList  = document.getElementById('schedList');
const schedCal   = document.getElementById('schedCal');

if (toggleList && toggleCal) {
  toggleList.addEventListener('click', () => {
    toggleList.classList.add('active');
    toggleCal.classList.remove('active');
    schedList.style.display = 'block';
    schedCal.style.display  = 'none';
  });
  toggleCal.addEventListener('click', () => {
    toggleCal.classList.add('active');
    toggleList.classList.remove('active');
    schedCal.style.display  = 'block';
    schedList.style.display = 'none';
    // Ensure calendar reveals animate in
    schedCal.querySelectorAll('.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
  });
}

// ── Class Registration Modal ───────────────────────────────
const modal       = document.getElementById('registerModal');
const modalClose  = document.getElementById('modalClose');
const modalTitle  = document.getElementById('modalTitle');
const regClass    = document.getElementById('reg-class');
const regDay      = document.getElementById('reg-day');
const regTime     = document.getElementById('reg-time');
const registerForm    = document.getElementById('registerForm');
const registerSuccess = document.getElementById('registerSuccess');

function openModal(className, day, time) {
  if (!modal) return;
  modalTitle.textContent = `${className} — ${day} ${time}`;
  regClass.value = className;
  regDay.value   = day;
  regTime.value  = time;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// All register buttons (list + calendar)
document.querySelectorAll('.register-btn, .cal-register-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.class, btn.dataset.day, btn.dataset.time);
  });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

// Waiver toggle
const showWaiver = document.getElementById('showWaiver');
const hideWaiver = document.getElementById('hideWaiver');
const waiverFull = document.getElementById('waiverFull');
if (showWaiver) showWaiver.addEventListener('click', () => waiverFull.style.display = 'block');
if (hideWaiver) hideWaiver.addEventListener('click', () => waiverFull.style.display = 'none');

// Modal chips
if (modal) {
  modal.querySelectorAll('.faq-chips').forEach(group => {
    const name = group.dataset.name;
    const hiddenInput = document.getElementById('val-' + name);
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        if (hiddenInput) hiddenInput.value = chip.dataset.val;
      });
    });
  });
}

// Registration form submit
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = registerForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(registerForm.action, {
        method: 'POST',
        body: new FormData(registerForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        registerForm.reset();
        modal.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        registerForm.style.display = 'none';
        registerSuccess.style.display = 'block';
        setTimeout(closeModal, 3500);
      } else {
        alert('Something went wrong. Please email apachewarrioracademy@gmail.com directly.');
        btn.textContent = 'Reserve My Spot →';
        btn.disabled = false;
      }
    } catch {
      alert('Network error. Please call (508) 905-9867 to reserve your spot.');
      btn.textContent = 'Reserve My Spot →';
      btn.disabled = false;
    }
  });
}

// ── Back to Top button ─────────────────────────────────────
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
