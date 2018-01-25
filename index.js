'use strict'
var getMdLinks = function(str) {
  var regex = /\[(.*?)\](([^\s]+))/gi

  let matchesArr = str.match(regex)

  var arrResult = matchesArr.map(function(element) {
    var url = element.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi); // enlace REVISAR REGEX CORRECTA
    //var text = element.match((\w+)\s+\1); //text
    var obj = { href: url.toString(), text: null }
    return obj
  })

   return arrResult
}

module.exports = getMdLinks




