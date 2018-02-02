$(document).ready(function(){
  $('#send').click(function () {    
    var text = $('#mdText').val();
    var result = getMdLinks.matches(text);
    $('#results').addClass('card-panel grey lighten-2');
    $('#results').html(JSON.stringify(result));
    $('#mdText').val('');
    console.log(result);
  });
});

