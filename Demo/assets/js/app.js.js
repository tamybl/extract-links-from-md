$(document).ready(function(){
  $('#send').click(function () {    
    var text = $('#mdText').val();
    var result = getMdLinks.matches(text);
    $('#results').html(JSON.stringify(result));
    $('#mdText').val('');
    console.log(result);
  });
});

