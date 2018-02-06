$(function () {
  $('.web-title, .web-url').on('keyup', function () {
    if ($('.web-title').val() === '' || $('.web-url').val() === '') {
      $('.submit-btn').prop('disabled', true);
    } else {
      $('.submit-btn').prop('disabled', false);
    }
  });
});
$('.submit-btn').on('keypress click', function(event) {
  if(event.which === 13 || event.type === 'click'){
    event.preventDefault();
    var webTitle = $('.web-title').val();
    var webUrl = $('.web-url').val();
    if($('.web-title').val() === ' ' || $('.web-url').val() === ' '){
      $('input[type=`text`].web-title').text('Enter a valid title');
      $('input[type=`text`].web-url').text('Enter a valid URL');
    }
    $('ul').append(`<li><h2> ${webTitle} </h2><hr><h3><a href='https://${webUrl}'>${webUrl}</a></h3><hr>
    <button type ='submit' class ="mark-as-read">Read</button><button type ='submit' class ="delete">Delete</button></li>`);
  }
  $('.delete').hover(function(){
    $(this).toggleClass('card-btn');
  })
  $('.mark-as-read').hover(function() {
    $(this).toggleClass('card-btn');
  })
  $('.mark-as-read').click(function(){
    $(this).toggleClass('read')
  })
  $('li').on('click', '.delete', function() {
    $(this).parent().remove();
  });
});
