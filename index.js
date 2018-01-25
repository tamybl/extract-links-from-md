'use strict'
var getMdLinks = function(str) {
  var regex = /\[(.*?)\](([^\s]+))/gi

  let matchesArr = str.match(regex)

  var arrResult = matchesArr.map(function(element) {
    var url = element.match(/\bhttps?:\/\/\S+/gi); // enlace REVISAR REGEX CORRECTA
    //var text = element.match(/(?<=\[).+?(?=\])/gi); //text
    var obj = { href: url.toString(), text: null }
    return obj
  })

   return arrResult
}

module.exports = getMdLinks




