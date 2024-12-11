document.addEventListener("DOMContentLoaded", function(){
    var outputElement = document.getElementById("output");
    for (var i = 1; i <= 100; i++) {
        var textNode = document.createTextNode("dit is regel"+ i );

        outputElement.appendChild(textNode);

        if (i<100) {
            outputElement.appendChild(textNode);
        }
    }
})