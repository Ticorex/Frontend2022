// JavaScript Document
console.log("hi");

//dit maakt de text " Night_mode_knop" een variable
var Night_mode_knop;

//dit zegt welk stukje html de variable representeert
Night_mode_knop = document.querySelector("button:last-of-type");

// als je night_mode_knop, in dit geval "button:last-of-type" aan klikt, runt de functie "Nightmode"
Night_mode_knop.addEventListener("click", Nightmode)

function Nightmode(){
    Night_mode_knop.classlist.toggle("white");
}