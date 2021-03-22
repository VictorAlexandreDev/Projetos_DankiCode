$(function(){
     initSlider();

     function initSlider(){
           var amt = $('.sobre-autor').length;
           var sizeContainer = 100 * amt;
           var sizeBoxSingle = 100 / amt;
           $('.sobre-autor').css('width',sizeBoxSingle+'%');
           $('.scroll-wraper').css('width',sizeContainer+'% ');

     }
})