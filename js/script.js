$ (function() {

  $('.background').fadeIn(1500);

  // clickイベントを記述したままだと他の操作も無効になる
  // clickイベントをコメントアウトすると正常に動作

  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({'scrollTop': position}, 'slow');
  });

  $('.header-nav-bar').click(function() {
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('header .nav-list-smartphone li').hide();
      $('header .nav-list-smartphone ul').css('height', '60px');
    } else {
      $(this).addClass('open');
      $('header .nav-list-smartphone ul').css('height', '250px');
      $('header .nav-list-smartphone li').slideDown();
    }
  });

  // $('.social-icon').hover(
  //   function() {
  //     $(this).animate({'font-size': '20px'}, 300);
  //   },
  //   function() {
  //     $(this).animate({'font-size': '15px'}, 300);
  //   }
  // );

});
