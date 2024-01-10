document.addEventListener("DOMContentLoaded", function() {
    var links=document.querySelectorAll('.nav_links a');
    var currentPath = window.location.pathname;

    links.forEach(function(link) {
        var href = link.getAttribute('href');

        if (href === '/') {
            if (currentPath === '/') {
                link.classList.add('active');
            }
        } 

        else {
            if (currentPath.includes(href)) {
                link.classList.add('active');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('a[href="#first-section"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById('first-section');

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});