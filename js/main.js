/* ============================================================
   APACHE WARRIOR ACADEMY — js/main.js
   ============================================================ */

// ── Nav scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Smart Nav CTA — changes label based on visible section ─
const navCta = document.getElementById('navCta');
const ctaMap = [
  { id: 'contact',  label: 'Get In Touch',    href: '#contact'  },
  { id: 'trial',    label: 'Claim Free Class', href: '#trial'    },
  { id: 'pricing',  label: 'View Pricing',     href: '#pricing'  },
  { id: 'programs', label: 'Our Programs',     href: '#programs' },
  { id: 'about',    label: 'Our Mission',      href: '#about'    },
  { id: 'home',     label: 'Free Trial',       href: '#trial'    },
];

if (navCta) {
  const sectionEls = ctaMap
    .map(c => ({ ...c, el: document.getElementById(c.id) }))
    .filter(c => c.el);

  const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const match = sectionEls.find(c => c.el === entry.target);
        if (match) {
          navCta.textContent = match.label;
          navCta.href = match.href;
        }
      }
    });
  }, { threshold: 0.3 });

  sectionEls.forEach(c => ctaObserver.observe(c.el));
}

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
