const imgA = document.getElementById('imgA');
const imgB = document.getElementById('imgB');

let showingA = true;

setInterval(() => {
    if (showingA) {
        imgA.classList.replace('visible', 'hidden');
        imgB.classList.replace('hidden', 'visible');
    } else {
        imgB.classList.replace('visible', 'hidden');
        imgA.classList.replace('hidden', 'visible');
    }
    showingA = !showingA;
}, 100);
