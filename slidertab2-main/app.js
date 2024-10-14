let items = document.querySelectorAll('.slider .item');
let active = 0; // Set to 0 initially for the first item

function loadShow() {
    // Reset styles for all items
    items.forEach((item, index) => {
        item.style.transform = 'translateX(0) scale(1)'; // Reset translation and scale
        item.style.zIndex = 0; // Reset z-index
        item.style.filter = 'blur(0)'; // Reset blur
        item.style.opacity = 0; // Reset opacity
    });

    // Style the active item
    items[active].style.transform = `translateX(0)`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Show items after the active one
    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt; // Adjust z-index
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6; // Fade out if too far
    }

    // Show items before the active one
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt; // Adjust z-index
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6; // Fade out if too far
    }
}

// Initial load
loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function() {
    // Move to the next item
    active = (active + 1) % items.length; // Loop back to the first item if at the end
    loadShow();
}

prev.onclick = function() {
    // Move to the previous item
    active = (active - 1 + items.length) % items.length; // Loop back to the last item if at the start
    loadShow();
}
