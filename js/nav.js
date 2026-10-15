document.addEventListener("DOMContentLoaded", function () {
  const navLinks = [
    { href: "index.html", label: "Αρχική" },
    { href: "seminaria.html", label: "Σεμινάρια" },
    {
      label: "Μαθήματα",
      children: [
        { href: "foititika.html", label: "Φοιτητικά" },
        { href: "panelladikes.html", label: "Πανελλαδικές" },
        { href: "katataktiries.html", label: "Κατατακτήριες" }
      ]
    },
    { href: "epimeleia.html", label: "Επιμέλεια" },
    { href: "sxetika.html", label: "Σχετικά" },
    { href: "epikoinonia.html", label: "Επικοινωνία" }
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const linksHtml = navLinks
    .map(function (link) {
      if (link.children) {
        const isChildActive = link.children.some(function (child) {
          return child.href === currentPage;
        });
        const childrenHtml = link.children
          .map(function (child) {
            const isActive = child.href === currentPage ? " active" : "";
            return '<li><a href="' + child.href + '" class="' + isActive.trim() + '">' + child.label + "</a></li>";
          })
          .join("");
        return (
          '<li class="nav-dropdown">' +
          '<button type="button" class="nav-dropdown-toggle' + (isChildActive ? " active" : "") + '" aria-expanded="false">' +
          link.label +
          ' <span class="nav-dropdown-caret">▾</span>' +
          "</button>" +
          '<ul class="nav-dropdown-menu">' +
          childrenHtml +
          "</ul>" +
          "</li>"
        );
      }
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

  function closeAllDropdowns() {
    document.querySelectorAll(".nav-dropdown-menu.open").forEach(function (menu) {
      menu.classList.remove("open");
    });
    document.querySelectorAll(".nav-dropdown-toggle").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen) {
        closeAllDropdowns();
      }
    });
  }

  document.querySelectorAll(".nav-dropdown-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = btn.nextElementSibling;
      const isOpen = menu.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) {
        menu.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function () {
    closeAllDropdowns();
  });
});
