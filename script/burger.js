let burgerBtn = document.querySelector('.mobile-menu');
let navMenu   = document.querySelector('.nav-menu');
let main      = document.querySelector('.main');

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        navMenu.classList.add('active');
        document.body.classList.add('lock');
    } else {
        navMenu.classList.remove('active');
        document.body.classList.remove('lock');
    }
})

function closeBurger() {
    navMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('lock');
}

main.addEventListener('click', function(e) {
    if (e.target != main) {
        closeBurger();
    }
})
