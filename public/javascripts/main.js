$(function(){
  $('#submit').on('click', function(){
    event.preventDefault();
    var rqData = $('#input').val();
    console.log(rqData);
    $('#results').html(rqData);
  });
});
