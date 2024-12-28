document.querySelectorAll('#main-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        document.querySelectorAll('#main-nav .nav-link').forEach(navLink => navLink.classList.remove('active'));
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    VANTA.WAVES({
        el: "#landing",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x51414f,
        shininess: 20.00,
        waveHeight: 10.00,
        waveSpeed: 0.80
    })
});