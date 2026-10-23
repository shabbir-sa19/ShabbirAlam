/**
 * Interactive Behavior (Navigation & Form Validation)
 */
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.getAttribute("data-open") === "true";
      navMenu.setAttribute("data-open", !isOpen);
      navToggle.setAttribute("aria-expanded", !isOpen);
    });
  }

  // Accessible Form Client-side Validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      let isValid = true;
      const inputs = contactForm.querySelectorAll("[required]");

      inputs.forEach((input) => {
        const errorEl = document.getElementById(`${input.id}-error`);
        if (!input.value.trim()) {
          isValid = false;
          input.setAttribute("aria-invalid", "true");
          if (errorEl) errorEl.style.display = "block";
        } else {
          input.removeAttribute("aria-invalid");
          if (errorEl) errorEl.style.display = "none";
        }
      });

      if (!isValid) {
        e.preventDefault(); // Stop form submission if invalid
      }
    });
  }
});
