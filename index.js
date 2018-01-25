'use strict'
var getMdLinks = function(str) {
  var regex = /\[(.*?)\](([^\s]+))/gi

  let matchesArr = str.match(regex)

  var arrResult = matchesArr.map(function(element) {
    var url = element.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi); // enlace REVISAR REGEX CORRECTA
    var textBrackets = element.match(/\[(.*?)\]/g); //Texto con Corchetes
    var text = textBrackets.substring(1, textBrackets.length-1)
    var obj = { href: url.toString(), text: text }
    return obj
  })

   return arrResult
}

module.exports = getMdLinks




