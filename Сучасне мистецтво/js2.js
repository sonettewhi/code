const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery img').forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
