let index = 0;

const showItem = (index) => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemWidth = items[0].clientWidth + 30; // item width + margin

    carousel.style.transform = `translateX(${-index * itemWidth}px)`;
};

const nextItem = () => {
    const items = document.querySelectorAll('.carousel-item');
    index = (index + 1) % items.length;
    showItem(index);
};

const prevItem = () => {
    const items = document.querySelectorAll('.carousel-item');
    index = (index - 1 + items.length) % items.length;
    showItem(index);
};

document.querySelector('.carousel-button.next').addEventListener('click', nextItem);
document.querySelector('.carousel-button.prev').addEventListener('click', prevItem);

// Show the first item initially
showItem(index);


