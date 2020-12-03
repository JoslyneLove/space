// Grab score from localStorage
const score = localStorage.getItem("score");

// Function to go back to planets page
function goBack() {
        window.open("planets.html","_self");
    }

// Write score into text
document.getElementById("final").innerText = "Tu puntuacion final fue " + score + "/32, no recopilaste los datos de todos los planetas";
