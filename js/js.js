$(function(){
    $('.popup_button').on('click', function(){
        $('.popup').fadeIn();
    });
    $('.팝업닫기').on('click', function(){
        $('.popup').fadeOut();
    });
});