/* ==========================================================================
   Lélegzet Jógastúdió — main.js
   Small, dependency-free progressive enhancements:
   1) Mobile menu toggle
   2) Sticky-nav scroll shadow
   3) Scroll-reveal via IntersectionObserver
   4) Closes mobile menu on link click / Escape
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- */
  /* 1) Mobile menu                                                    */
  /* ---------------------------------------------------------------- */
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var iconOpen = document.getElementById("icon-open");
  var iconClose = document.getElementById("icon-close");

  function closeMenu() {
    if (!menu) return;
    menu.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  }

  function openMenu() {
    if (!menu) return;
    menu.classList.remove("hidden");
    toggle.setAttribute("aria-expanded", "true");
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------------------------------------------------------- */
  /* 2) Sticky-nav shadow on scroll                                     */
  /* ---------------------------------------------------------------- */
  var nav = document.getElementById("site-nav");
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------- */
  /* 3) Scroll-reveal                                                   */
  /* ---------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* No IntersectionObserver support: show everything immediately */
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
