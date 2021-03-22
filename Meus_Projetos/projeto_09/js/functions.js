$('nav a').hover(function(){
      $('nav li').removeClass('selected');
      $(this).parent().addClass('selected')
})


