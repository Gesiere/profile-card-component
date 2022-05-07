const hamburger = document.querySelector('.open-hamburger');
const closebtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-links');
const header = document.querySelector('.header');



hamburger.addEventListener('click', () => {
    hamburger.classList.add('hidden');
    mobileNav.classList.add('active');
    closebtn.classList.remove('hidden');
    
})


closebtn.addEventListener('click', () => {
    hamburger.classList.remove('hidden');
    mobileNav.classList.remove('active');
    closebtn.classList.add('hidden');
    
})