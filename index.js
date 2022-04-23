//déclaration des variables age et genre
let age;
let genre;
//déclaration du déclencheur de résultat
let button = document.getElementById("bouton");
let message = document.getElementById("message");
// déclaration de la fonction quiinterpréte et calcul le résultat selon les données entrées par l'utilisateur
function mesimpots() {
    age = document.getElementById("age").value;
    genre = document.getElementById("genre").value;
    // édition du message en fonction du résultat du calcul
    if (genre == "H" && age > 20) {
        message.innerHTML = "<h2> PAYES TES IMPOTS ! </h2>";
    } else if (genre == "F" && age >= 18 && age <= 35) {
        message.innerHTML = "<h2>IMPOSABLE!!!!</h2>";
    } else {
        message.innerHTML = "<h1>Que dalle à payer ! c'est cool ! </h1>";
    }
}
// ajout de l'évement  à l'évenement click de la souris sur le bouton.
bouton.addEventListener("click", mesimpots, false);