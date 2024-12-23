document.querySelectorAll('#main-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        document.querySelectorAll('#main-nav .nav-link').forEach(navLink => navLink.classList.remove('active'));
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});