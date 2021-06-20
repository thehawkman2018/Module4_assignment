(function (window) {
    var speakerCiao = {};

    
    var speakWords = "Good Bye";


    speakerCiao.speak = function (name) {
        console.log(speakWords + " " + name);
    }


    window.speakerCiao = speakerCiao;

})(window);