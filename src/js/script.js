const aptDescription = document.querySelector('.apt-description');
const nav = document.querySelector('.nav');
const date = document.querySelector('.date');
const closeBtn = document.querySelector('.close-button');
const openNav = document.querySelector('.open-nav');
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section, header');
let i = 0;


// function updateAptDescription() {

//     let adjectives = ['znajdź spokój', 'zrelaksuj się', 'kontempluj', 'odpocznij!']
    
//       setTimeout(function () {
//         aptDescription.textContent = adjectives[i];
//         i++;

//         if (i < adjectives.length) {
//             updateAptDescription();
//         }
//     }, 600)
// }

const navBg = () => {
    scrollY > 100 ? nav.style.opacity = "1" : "";

}

const currentDate = () => {
    const year = (new Date).getFullYear();
    date.innerText = year;
}

const closeNav = () => {
    nav.classList.toggle("hidden")
    console.log(menuItems);
    setTimeout(function () {
     openNav.classList.toggle('display')
    }, 600)
}

const handleNavBtn = () => {
    const currentSection = window.scrollY;

    sections.forEach(section => {
console.log(sections);
        if (section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            openNav.classList.add('black-menu-btn')
        } else if (!section.classList.contains('bright-section') && section.offsetTop <= currentSection + 10) {
            openNav.classList.remove('black-menu-btn')
        }
    })
}

//------Functions call------\\

//entrance animation
// setTimeout(() => {
//     updateAptDescription();
// }, 2500);

//handle navbar functions
window.addEventListener('scroll', navBg)
window.addEventListener('scroll', handleNavBtn);

//hide nav
closeBtn.addEventListener('click', closeNav)
openNav.addEventListener('click', closeNav)
menuItems.forEach(item => {
    item.addEventListener('click', closeNav)
})

// current year in footer
currentDate();