(function (window) {

var speakerHello = {};

var speakWords = "Hello";

speakerHello.speak = function (name) {
    console.log(speakWords + " " + name);
}

window.speakerHello = speakerHello;

}) (window);