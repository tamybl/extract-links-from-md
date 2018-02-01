$(document).ready(function(){
  $('#send').click(function () {    
    var text = $('#mdText').val();
    $('#results').html(extractUrls.MdLink(text));
  });
});

