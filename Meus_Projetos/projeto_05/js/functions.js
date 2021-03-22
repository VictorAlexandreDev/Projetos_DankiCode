$(function(){
      var currentValue = 0;
      var isDrag = false;
      $('.pointer-barra').mousedown(function(){
            isDrag = true;
      })
      $(document).mouseup(function(){
            isDrag = false;
      })
      $('.barra-pointer').mousemove(function(e){
            if(isDrag){
                  var elBase = $(this);
                  var mouseX = e.pageX - elBase.offSet().left;
                  if(mouseX < 0)
                  mouseX = 0;
                  if(mouseX > elBase.width())
                        mouseX = elBase.width();
                 
                  $('.pointer-barra').css('left'.mouseX+'px');
                  currentValue = (mouseX / elBase.width()) * 100;
                  $('.barra-preco-fill').css('width',currentValue+'%');
            }
      })

      function disableTextSelection(){
                  $("body").css("-webkit-user-select","none");
                  $("body").css("-moz-user-select","none");
                  $("body").css("-ms-user-select","none");
                  $("body").css("-o-user-select","none");
                  $("body").css("user-select","none");
              });
      }
})