let menu = document.getElementById('menu');
let navLink = document.getElementById('navLink');

menu.addEventListener('click', () => {
navLink.classList.toggle('show');
console.log('clicked');
});