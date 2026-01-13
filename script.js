// Language system + small UI helpers
let lang = localStorage.getItem("lang") || "ar";

function applyLang() {
  // Apply text content for any element with data-ar
  document.querySelectorAll("[data-ar]").forEach(el => {
    // dataset keys are 'ar' and 'en'
    const text = el.dataset[lang];
    if (typeof text !== "undefined") {
      el.textContent = text;
    }
  });

  // direction
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  // fonts: Arabic = Cairo (already loaded), English should prefer Poppins
  if (lang === "ar") {
    document.body.style.fontFamily = "'Cairo', sans-serif";
  } else {
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }

  // update toggle button
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = lang === "ar" ? "🌍 EN" : "🌍 AR";

  // set HTML lang attribute
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
}

// toggle handler
document.addEventListener("DOMContentLoaded", () => {
  applyLang();

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem("lang", lang);
      applyLang();
    });
  }

  // accessibility: allow pressing L key to toggle language quickly (optional)
  document.addEventListener("keydown", (e) => {
    if ((e.key === "l" || e.key === "L") && (e.metaKey || e.ctrlKey)) {
      lang = lang === "ar" ? "en" : "ar";
      localStorage.setItem("lang", lang);
      applyLang();
    }
  });

  // progressive enhancement: lazy animate icons on hover (delegated)
  document.querySelectorAll('.exercise').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1.08) rotate(-6deg)';
        img.style.transition = 'transform 300ms ease';
      }
    });
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('img');
      if (img) {
        img.style.transform = '';
      }
    });
  });
});