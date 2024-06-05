// Navbar sticky behavior
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar?.classList.add('is-sticky');
    } else {
        navbar?.classList.remove('is-sticky');
    }

    // Back-to-top button visibility
    const backToTopBtn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Section change
function onSectionChange(sectionId) {
    // No need for implementation in static page
}

// Toggle navbar
function toggleMenu() {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    navbarCollapse?.classList.toggle('show');
}

// Scroll to top button functionality
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
