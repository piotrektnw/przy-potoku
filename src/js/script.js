const aptDescription = document.querySelector('.apt-description');
const nav = document.querySelector('.nav');
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


//------Functions call------\\

//entrance animation
setTimeout(() => {
    updateAptDescription();
}, 2500);

//handle navbar functions
window.addEventListener('scroll', navBg)