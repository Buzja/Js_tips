$(document).ready(function(){
  var menuBtn = $('.hamburger');
  var menu = $('.menu');
  menuBtn.click(function(){
    $('.brand').toggleClass('active');
   if(menuBtn.hasClass("opn")){
     menu.removeClass("opn_mnu");
     menuBtn.removeClass("opn");
       menuBtn.css({"background":" #fff","box-shadow":"0 2px 5px rgba(0,0,0,.3)"});

   }
   else{
     menu.addClass("opn_mnu");
     menuBtn.addClass("opn");
       menuBtn.css({"background":"rgba(0,0,0,0)","box-shadow":"0 2px 5px transparent"});
   }
 }
 );

    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500, "swing"); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
    $('.popup').click(function(){
       $('#exampleModal').arcticmodal();
    });
    // Paralax
    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.move',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -50,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    } else {

    }

});
$(window).resize(function(){
  if($(window).width() > 960){
  $('.move').css({"top":"0","right":"0"});
}
    // change functionality for larger screens
});
