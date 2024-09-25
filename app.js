document.addEventListener('DOMContentLoaded', function() {
     Add smooth scrolling to all links
    document.querySelectorAll('a').forEach(anchor = {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior 'smooth'
                });
            }
        });
    });

     Simple fade-in effect for content
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section = {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1.5s ease-in-out';
        setTimeout(() = {
            section.style.opacity = 1;
        }, 500);
    });
});
