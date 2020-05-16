// this is the code which will be injected into a given page...

(function () {

    console.log("Monospacing font");
    var element_matches = document.querySelectorAll('[id^=INPUT-FIELD]');
    console.log(element_matches);
    for (i = 0; i < element_matches.length; ++i) {
        element_matches[i].style.fontFamily = "monospace";
    }

})();
