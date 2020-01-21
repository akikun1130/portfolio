$ (function() {

  $('.background').fadeIn(1500);

  // clickイベントを記述したままだと他の操作も無効になる
  // clickイベントをコメントアウトすると正常に動作

  // $('a').click(fucntion() {
  //   $(this).hide();
  // });
  // $('h1').css('color', 'red');
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({'scrollTop': position}, 'slow');
  });

  $('.social-icon').hover(
    function() {
      $(this).animate({'font-size': '20px'}, 300);
    },
    function() {
      $(this).animate({'font-size': '15px'}, 300);
    }
  );

});
