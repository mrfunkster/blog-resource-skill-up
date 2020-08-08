let burgerBtn = document.querySelector('.mobile-menu');
let navMenu   = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        navMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
    }
})