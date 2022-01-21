
const aptDescription = document.querySelector('.apt-description');

function updateAptDescription() {

    let adjectives = ['znajdź spokój', 'zrelaksuj się', 'kontempluj', 'odpocznij']
    
    setTimeout(function () {
        aptDescription.textContent = adjectives[i];
        i++;

        if (i < adjectives.length) {
            updateAptDescription();
        }
    }, 600)
}


//------Functions call------\\

//entrance animation
setTimeout(() => {
    updateAptDescription();
}, 2500);