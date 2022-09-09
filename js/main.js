$( () => {
  $(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    var windowHeight = window.innerWidth;
    windowTop > 60 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 60 ? $('ul').css('top','5vh') : $('ul').css('top','15vh');
  });

  $('#logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    },500);
  });

  $('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    },500);
    e.preventDefault();
  });

  $('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('ul').toggleClass('showMenu');

    $('li').on('click', () => {
      $('ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
    });
  });

});

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.padding = "100vw 10vh";
        //document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("header").style.padding = "100vw 15vh";
        //document.getElementById("logo").style.fontSize = "35px";
    }
}

 */
document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});


