$(function () {
    var pageLinks = $('.nav-link-in-page');

    function setSelectedLink() {
        pageLinks.removeClass('selected');
        pageLinks.filter('[href*="' + window.location.hash + '"]').addClass('selected');
    }

    window.onhashchange = setSelectedLink;

    setSelectedLink();

    if (window.location.pathname === '/' && !window.location.hash) {
        pageLinks.filter('[href*="home"]').addClass('selected');
    }
});
