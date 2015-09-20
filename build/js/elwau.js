(function($) {

  $(function(){

    // slick slider
    $('.main-slider').slick({
      prevArrow : '<button type="button" class="slick-prev"><span></span></button>',
      nextArrow : '<button type="button" class="slick-next"><span></span></button>'  
    });

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

    
    $.fn.tabsPower = function () {
      /*
      Обязательные классы и атрибуты:
      js-tab-menu - контейнер с табами
      js-tab-menu-btn - таб-кнопка
      data-tab-btn - атрибут для таба-кнопки
      js-tab-content - контейнер с отображаемыми элементами табов
      js-tab-item - элемент таба для скрытия/отображения
      data-tab-item - атрибут для элемента таба
      */
      
      // poweredGrp - объект, к которому применяем плагин
      var poweredGrp = $(this),
          allTabItems = poweredGrp.find('.js-tab-item').hide();
      
      
      function tabs(allTabItems, clickedBtn) {
      
        // для срабатывания клика только у неактивных табов
        if ( !(clickedBtn.hasClass('active')) ) {

          var curBtnData = clickedBtn.data('tab-btn'),
              allCurItems = clickedBtn.parent().siblings('.js-tab-content').children('.js-tab-item');

          clickedBtn.addClass('active')
            .siblings().removeClass('active');

          // если нет дата = all, то показывает все элементы
          if ( clickedBtn.data('tab-btn') === 'all' ) {
            allCurItems.fadeIn();
          } else {
            allCurItems.hide();

            // перебор атрибутов дат элементов меню с кликнутым табом и открытие кликнутого
            allCurItems.each(function(){
              if ( $(this).data('tab-item') === curBtnData ) {
                $(this).fadeIn();
              }
            });

          }
          
        }
      }
      
      // событие на клик у кнопки в элементе js-tab-menu
      poweredGrp.find('.js-tab-menu').on('click', '.js-tab-menu-btn', function (e) {
        e.preventDefault();
        var $this = $(this);
        tabs(allTabItems, $this);
      });
      

      // эмуляция клика по первому табу при загрузке страницы
      poweredGrp.find('.js-tab-menu').each(function(){
        $(this).find('.js-tab-menu-btn').first().click();
      });
      
    };
    
    // вызов функции
    $('.catalog-item-info').tabsPower();



    (function(){
      $.fn.imgSlider = function(){
        var $this = $(this), 
            $dataImg = $this.data('img');
        $('.img-big img').attr('src', 'img/' + $dataImg);
      }

      $('.img-slider').on('click', '.img-small img', function(){
        var $this = $(this);
        $this.imgSlider();
      });
    })();


    $('.write-us').on('click', '.js-modal', function(){
      $('#exampleModal').arcticmodal();
    })


  });

})(jQuery);