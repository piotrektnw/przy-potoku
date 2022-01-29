const aptDescription = document.querySelector('.apt-description');
const nav = document.querySelector('.nav');
const date = document.querySelector('.date');
let i = 0;


function updateAptDescription() {

    let adjectives = ['znajdź spokój', 'zrelaksuj się', 'kontempluj', 'odpocznij!']
    
      setTimeout(function () {
        aptDescription.textContent = adjectives[i];
        i++;

        if (i < adjectives.length) {
            updateAptDescription();
        }
    }, 600)
}

const navBg = () => {
    scrollY > 100 ? nav.style.opacity = "1" : "";

}

const currentDate = () => {
    const year = (new Date).getFullYear();
    date.innerText = year;
}

//------Functions call------\\

//entrance animation
setTimeout(() => {
    updateAptDescription();
}, 2500);

//handle navbar functions
window.addEventListener('scroll', navBg)

// current year in footer
currentDate();