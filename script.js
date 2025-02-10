document.addEventListener('DOMContentLoaded', () => {
    const floatingHeader = document.querySelector('.floating-header');
    const sections = document.querySelectorAll('section');
    const modal = document.getElementById('imageModal');
    const expandedImage = document.getElementById('expandedImage');
    const projectImages = document.querySelectorAll('.project-image');
    const sectionIndicator = document.querySelector('.section-indicator');

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Update section indicator in floating header
                if (entry.target.id) {
                    sectionIndicator.textContent = entry.target.id.charAt(0).toUpperCase() + 
                                                 entry.target.id.slice(1);
                }
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all sections
    sections.forEach(section => {
        if (section.classList.contains('scroll-animate')) {
            observer.observe(section);
        }
    });

    // Show/hide floating header based on scroll position
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show header after scrolling past hero section
        if (scrollTop > window.innerHeight * 0.5) {
            floatingHeader.classList.add('visible');
        } else {
            floatingHeader.classList.remove('visible');
        }

        lastScrollTop = scrollTop;
    });

    // Image modal functionality
    projectImages.forEach(image => {
        image.addEventListener('click', (e) => {
            expandedImage.src = e.target.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
