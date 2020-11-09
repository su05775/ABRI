$(function(){
    $('.popup_button').on('click', function(){
        $('.popup').fadeIn();
    });
    $('.팝업닫기').on('click', function(){
        $('.popup').fadeOut();
    });
});
// 팝업창

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
// 스와이퍼