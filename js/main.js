(function () {
  'use strict';

  /* ── HAMBURGER / MOBILE NAV ────────────────────────── */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeMobileNav();
    } else {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close navigation menu');
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  mobileNav.querySelectorAll('.mobile-nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('click', function (e) {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeMobileNav();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMobileNav();
  }, { passive: true });

  /* ── STICKY HEADER + BACK-TO-TOP + SCROLL CUE ─────── */
  var header    = document.getElementById('siteHeader');
  var scrollCue = document.getElementById('scrollCue');
  var backToTop = document.getElementById('backToTop');
  var heroH     = window.innerHeight;

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function onScroll() {
    var y = window.scrollY;
    backToTop.classList.toggle('visible', y > 400);
    header.classList.toggle('revealed', y > heroH * 0.25);
    header.classList.toggle('opaque', y > heroH * 0.25);
    scrollCue.classList.toggle('hidden', y > 60);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    heroH = document.getElementById('hero').offsetHeight;
  }, { passive: true });

  /* ── SCROLL FADE-IN ────────────────────────────────── */
  var fadeEls = document.querySelectorAll('.fi');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ── SMOOTH ANCHOR NAV ─────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });
}());
