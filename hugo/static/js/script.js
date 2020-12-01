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

    // Dropdown behaviour
    
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
    );
});
