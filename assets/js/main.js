(() => {
  const THEME_KEY = "sk-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || "dark";
    } catch (e) {
      return "dark";
    }
  }

  function applyTheme(theme) {
    document.body.classList.toggle("light", theme === "light");
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "◐ light" : "◑ dark";
  }

  function initTheme() {
    let theme = getStoredTheme();
    applyTheme(theme);
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      theme = theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
      applyTheme(theme);
    });
  }

  function initScrollReveal() {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.92) {
        io.observe(el);
      } else {
        el.classList.add("is-visible");
      }
    });
  }

  function initScrollEffects() {
    const sections = [
      "about",
      "experience",
      "research",
      "education",
      "skills",
      "contact",
    ];
    const progressBar = document.getElementById("progress-bar");
    const backToTop = document.getElementById("back-to-top");
    const navLinks = document.querySelectorAll("[data-navlink]");

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (progressBar) {
        progressBar.style.width =
          (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
      }
      if (backToTop) {
        const show = window.scrollY > 600;
        backToTop.style.opacity = show ? "1" : "0";
        backToTop.style.pointerEvents = show ? "auto" : "none";
      }
      let current = "";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) current = id;
      });
      navLinks.forEach((a) => {
        a.classList.toggle(
          "is-active",
          a.getAttribute("data-navlink") === current
        );
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const msg = form.elements.message.value;
      window.location.href =
        "mailto:shubham.kumar07.official@gmail.com" +
        "?subject=" +
        encodeURIComponent("Website enquiry — " + name) +
        "&body=" +
        encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initScrollReveal();
    initScrollEffects();
    initContactForm();
  });
})();
