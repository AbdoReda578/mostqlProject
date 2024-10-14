    window.addEventListener('scroll', function() {
        const items = document.querySelectorAll('.timeline-item');
        const windowHeight = window.innerHeight;
        const revealPoint = 150; // How much above the viewport the item should start animating

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight - revealPoint) {
                item.classList.add('visible');
            }
        });
    });

