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
  function countUnread() {
    num1 = ($('.bookmarks').length);
    num2 = ($('.read').length);
    console.log(num2);
    return num1 - num2;
  }
  // var count = 0;
  $('.submit-btn').on('keypress click', function(event) {
    // count++;
    //if(event.which === 13 || event.type === 'click'){
      event.preventDefault();
      // $('.total-unread').html(countUnread());
      var webTitle = $('.web-title').val();
      var webUrl = $('.web-url').val();
      if(!is_valid_url(webUrl)){
        alert('invalid url')
      } else if ($('.web-title').val() === ''){
        alert('enter a valid title');
      } else {
        $('.total-bookmarks').html($('.bookmarks').length + 1);
        $('.total-unread').html($('.bookmarks').length + 1);
        $('ul').append(`<li class='bookmarks'><h2> ${webTitle} </h2><hr><h3><a href='https://${webUrl}'>${webUrl}</a></h3><hr>
        <button class ="mark-as-read">Read</button><button class ="delete">Delete</button></li>`);
      }
      $('form').children('input').val('');
    //}
  });
  $('ul').on('click', '.mark-as-read', function(){
    $(this).toggleClass('read');
    $('.total-read').html($('.read').length);
    $('.total-unread').html(countUnread());
  })
  $('ul').on('click', '.delete', function() {
    $(this).parent().remove();
    // count--;
    // console.log(count);
    $('.total-bookmarks').html($('.bookmarks').length);
    $('.total-read').html($('.read').length);
  });
});
