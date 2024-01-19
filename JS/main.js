"use strict"; 

/*Hämtar namnet på knappen */
let toggleBtn = document.getElementById("toggle_darkmode"); 

/*Lägger till eventlyssnare på click som kallar på funktion */
toggleBtn.addEventListener('click', toggleFunction);

/*Funktionen hämtar "main" via taggnamn och jag ger den klassen dark_mode*/
function toggleFunction(){ 
    let mainEl = document.getElementsByTagName('main')[0]; 

    mainEl.className = "dark_mode"; 
}
