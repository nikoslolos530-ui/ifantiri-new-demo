document.addEventListener("DOMContentLoaded", function () {
  const navLinks = [
    { href: "index.html", label: "Αρχική" },
    { href: "seminaria.html", label: "Σεμινάρια" },
    { href: "foititika.html", label: "Φοιτητικά" },
    { href: "panelladikes.html", label: "Πανελλαδικές" },
    { href: "epimeleia.html", label: "Επιμέλεια" },
    { href: "katataktiries.html", label: "Κατατακτήριες" },
    { href: "apothetirio.html", label: "Αποθετήριο" },
    { href: "podcast.html", label: "Podcasts" },
    { href: "sxetika.html", label: "Σχετικά" },
    { href: "epikoinonia.html", label: "Επικοινωνία" }
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const linksHtml = navLinks
    .map(function (link) {
      const isActive = link.href === currentPage ? " active" : "";
      return '<li><a href="' + link.href + '" class="' + isActive.trim() + '">' + link.label + "</a></li>";
    })
    .join("");

  const headerHtml =
    '<header class="site-header">' +
    '<div class="nav-wrap">' +
    '<a href="index.html" class="nav-logo">' +
    '<img src="assets/logo.jpg" alt="Υφαντήρι Ιστορίας — λογότυπο">' +
    "</a>" +
    '<button class="nav-toggle" id="navToggle" aria-label="Άνοιγμα μενού" aria-expanded="false">☰</button>' +
    '<ul class="nav-links" id="navLinks">' +
    linksHtml +
    "</ul>" +
    "</div>" +
    "</header>";

  const placeholder = document.getElementById("nav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = headerHtml;
  }

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
