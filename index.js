'use strict'
var matchUrl = function(str) {
   //return 'Hola, soy un modulo que no hace nada'
  //console.log(regexT)
  var regex = /\[(.*?)\](([^\s]+))/gi
  // let reg = /\bhttps?:\/\/\S+/gi;

  let matchesArr = str.match(regex)

  var arrResult = matchesArr.map(function(element) {
    var url = element.match(/\bhttps?:\/\/\S+/gi); // enlace REVISAR REGEX CORRECTA
    //var text = element.match(/(?<=\[).+?(?=\])/gi); //text
    var obj = { text: null, href: url.toString() }
    return obj
  })

   return arrResult
}

module.exports = matchUrl




