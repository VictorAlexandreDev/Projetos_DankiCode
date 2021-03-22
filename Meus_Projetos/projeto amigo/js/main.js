const icon_menu = document.querySelector('h3.button'); // pegando o botao do menu 
const menu = document.querySelector('nav.menu_mobile'); // pegando o menu 
const ul = document.querySelector('nav.menu_mobile ul');

icon_menu.addEventListener('click', () =>{ // arrow function 
      if(menu.classList.contains('esconder') && ul.style.display ==='none'){ // se o menu conter a classe esconder 
            menu.classList.add('mostrar'); // adicione a classe mostrar 
            menu.classList.remove('esconder'); // e remova a classe esconder 
            ul.style.display = 'block';
      }else{ // se não 
            menu.classList.add('esconder'); // se ja estiver aberto ao clicar adicione a classe esconder
            menu.classList.remove('mostrar'); // e remova a classe mostrar 
            ul.style.display = 'none';
      }
});
