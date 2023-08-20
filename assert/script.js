const toggelbtn = document.getElementsByClassName('toggel')[0];
const navl = document.getElementsByClassName('nav-links')[0];
toggelbtn.addEventListener('click', () => {
navl.classList.add('active')
})