(function($) {

  $(function(){

    // slick slider
    $('.main-slider').slick();

    // сортировать + показать 
    $('.js-cat-button a').on('click', function(event){
      event.preventDefault();
      $(this)
        .toggleClass('active');
    });
    
    $('.js-cat-sorting li').on('click', function(){
      $('.js-cat-sorting li')
        .removeClass('active');
      $(this)
        .addClass('active');
    });

    // выделение первого списка
    $('.js-cat-sorting li')
      .first()
        .addClass('active')

    // сортировка 
    $('.js-arrows').on('click', function(){
      $(this)
        .find('span')
          .toggleClass('darr');
    });

  });

})(jQuery);