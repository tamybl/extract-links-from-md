var getMdLinks = {};

/*
* Funcion que a partir de una cadena de texto en formato Mardkdown devuelve
* todo elemento de la forma []()
*/
getMdLinks.mdLink = function(str) {
  var regex = /\[(.*?)\](([^\s]+))/gi;
  var matchesArr = str.match(regex);
    var matchesArrFilter = matchesArr.filter(function (element) {
    return element !== '[]()';
    });
  return matchesArrFilter;
}

getMdLinks.url = function (link) {
  var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var url = link.match(regex).toString();
  return url;
}

getMdLinks.text = function (txt) {
  var text = txt.match(/\[(.*?)\]/g).toString();
  var textResult = text.substring(1,text.length-1);
  if (textResult === '') {
    return 'No results';
  }
  return textResult;
}

/*
* Funcion que devuelve un arreglo de objetos con el enlace y su texto.
*/
getMdLinks.matches = function(str) { 
  if(str === '' || str === null || str.length === undefined || matchesArr === undefined) {
    return 'No Results';
  }
  var matchesArr = getMdLinks.mdLink(str);
  var arrResult = matchesArr.map(function (element) {
    var url = getMdLinks.url(element); 
    var text = getMdLinks.text(element);
    var obj = { href: url, text: text }
    return obj;
  });
  return arrResult;
}

module.exports.getMdLinks = getMdLinks;

