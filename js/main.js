(function () {
  'use strict';

  /* ── STICKY HEADER ─────────────────────────────────── */
  var header    = document.getElementById('siteHeader');
  var scrollCue = document.getElementById('scrollCue');
  var heroH     = window.innerHeight;

  function onScroll() {
    var y = window.scrollY;

    if (y > heroH * 0.25) {
      header.classList.add('revealed', 'opaque');
    } else {
      header.classList.remove('revealed', 'opaque');
    }

    if (y > 60) {
      scrollCue.classList.add('hidden');
    } else {
      scrollCue.classList.remove('hidden');
    }
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
