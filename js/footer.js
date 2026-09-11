document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const isHome = currentPage === "index.html" || currentPage === "";

  const signatureHtml = isHome
    ? '<div class="flt-signature">Design by <span>Freq Lab Team</span></div>'
    : "";

  const footerHtml =
    '<footer class="site-footer">' +
    '<div class="container">' +
    '<div class="footer-grid">' +
    '<div>' +
    '<h3>Υφαντήρι Ιστορίας</h3>' +
    '<p style="max-width:32ch; opacity:0.85; margin:0;">Εκπαιδευτικές υπηρεσίες και επιμέλεια κειμένου από τον Κυριάκο Η. Μαυροειδέα.</p>' +
    "</div>" +
    '<div>' +
    '<h3>Πλοήγηση</h3>' +
    '<ul class="footer-nav">' +
    '<li><a href="seminaria.html">Σεμινάρια</a></li>' +
    '<li><a href="foititika.html">Φοιτητικά</a></li>' +
    '<li><a href="panelladikes.html">Πανελλαδικές</a></li>' +
    '<li><a href="epimeleia.html">Επιμέλεια</a></li>' +
    "</ul>" +
    "</div>" +
    '<div>' +
    '<h3>Επικοινωνία</h3>' +
    '<ul class="footer-nav">' +
    '<li><a href="epikoinonia.html">Φόρμα επικοινωνίας</a></li>' +
    '<li><a href="sxetika.html">Σχετικά με τον Κυριάκο</a></li>' +
    "</ul>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    '<span>&copy; ' + year + ' Υφαντήρι Ιστορίας</span>' +
    "</div>" +
    "</div>" +
    signatureHtml +
    "</footer>";

  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    placeholder.outerHTML = footerHtml;
  }
});
