$(document).ready(function(){
  $(document).on('submit', function(e) {
    if($('form').val() === '' && e.which === 13) {
      alert('enter valid title and url')
    }
  });
  $(function () {
    $('.web-title, .web-url').on('keyup', function () {
      if ($('.web-title').val() === '' && $('.web-url').val() === '') {
        $('.submit-btn').prop('disabled', true);
      } else {
        $('.submit-btn').prop('disabled', false);
      }
    });
  });
  function is_valid_url(url) {
    return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
  }
  $('.submit-btn').on('keypress click', function(event) {
    var count = 1 + $('li').length;
    if(event.which === 13 || event.type === 'click'){
      event.preventDefault();
      var webTitle = $('.web-title').val();
      var webUrl = $('.web-url').val();
      if(!is_valid_url(webUrl)){
        alert('invalid url')
      } else if ($('.web-title').val() === ''){
        alert('enter a valid title');
      } else {
        $('.total-bookmarks').text(count)
        $('ul').append(`<li><h2> ${webTitle} </h2><hr><h3><a href='https://${webUrl}'>${webUrl}</a></h3><hr>
        <button type ='submit' class ="mark-as-read">Read</button><button type ='submit' class ="delete">Delete</button></li>`);
      }
      $('form').children('input').val('');
    }
    $('ul').on('click', '.mark-as-read', function(){
      $(this).toggleClass('read')
    })
    $('ul').on('click', '.delete', function() {
      $(this).parent().remove();
    });
  });
});
