const parralaxes = document.querySelectorAll('.parralax');
addEventListener('scroll' , function() {
    let scrollOffset = window.scrollY;
    parralaxes.forEach(function(parralax) {
    parralax.style.backgroundPositionY = (scrollOffset - parralax.offsetTop) * 0.5  + "px"/*szybkosc przewijania*/ 
    })
    
});

const lang = {
    "html": "90%",//html
    "css": "80%",//css
    "javascript": "40%",//js
    "php": "30%",//php
    "wordpress": "70%",//wp
    "bootstrap": "60%",//bs
    "sql": "35%",
    "cpp": "25%",
    "cs": "20%",
    "python": "20%",
    "git": "20%",
    "api": "15%"
};
const multiply = 14;

$.each( lang, function( language, pourcent) {
    const delay = 700;

    setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
});