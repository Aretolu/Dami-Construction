document.addEventListener("DOMContentLoaded", function () {
  // Toggle the navigation menu when hamburger is clicked
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Initialize Bootstrap carousel (if not already done by Bootstrap)
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleCaptions"),
    {
      interval: 5000, // Auto-slide every 5 seconds
      ride: "carousel",
    }
  );

  // Adjusting Hero text size on window resize
  const adjustHeroText = () => {
    const heroText = document.querySelector(".hero-text");
    if (window.innerWidth <= 768) {
      heroText.style.fontSize = "1em"; // Smaller font size on mobile
      heroText.style.width = "100%";
    } else {
      heroText.style.fontSize = "1.5em"; // Larger font size on desktop
      heroText.style.width = "700px";
    }
  };

  // Call the adjustHeroText function on page load and window resize
  adjustHeroText();
  window.addEventListener("resize", adjustHeroText);
});

// FOOTER

document.addEventListener("DOMContentLoaded", function () {
  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");

  // Show or hide the back-to-top button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Smooth scroll to top when clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Back to top button functionality
const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------------------------------------------------------------- */

// CLAUDE
document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.getElementById("hamburger");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Enhanced hamburger menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Close mobile menu if open
        navLinks.classList.remove("active");
      }
    });
  });

  // Enhanced carousel functionality
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleCaptions"),
    {
      interval: 5000,
      ride: "carousel",
      touch: true,
    }
  );

  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll(
    ".prep, .hero-text, .footer-content > *"
  );

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    fadeObserver.observe(element);
  });

  // Enhanced back to top button
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
      backToTopBtn.style.opacity = "1";
    } else {
      backToTopBtn.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopBtn.style.display = "none";
        }
      }, 300);
    }
  });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Form validation enhancement
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
});

// Save this as tabs.js
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab buttons and content
  const tabButtons = document.querySelectorAll("#myTab li a");
  const tabContents = document.querySelectorAll(".tab-content .tab-pane");

  // Add click event to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all buttons and content
      tabButtons.forEach((btn) => {
        btn.parentElement.classList.remove("active");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Add active class to clicked button
      button.parentElement.classList.add("active");

      // Show corresponding content
      const targetId = button.getAttribute("href").substring(1);
      document.getElementById(targetId).classList.add("active");
    });
  });
});
