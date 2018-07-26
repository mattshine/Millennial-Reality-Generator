var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/millennials/gi, 'people under 40');
            var replacedText = text.replace(/aliens/gi, 'extraplanetary visitors');
            var replacedText = text.replace(/Mitch McConnell/gi, 'Darth Turtle');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

// a dumb project by Lament Icarus and theWifiPirate