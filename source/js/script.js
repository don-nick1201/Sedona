    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var navClose = document.querySelector('.main-nav__close');

    navMain.classList.remove('main-nav--nojs');
    navMain.classList.add('main-nav--closed');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      }
    });
    navClose.addEventListener('click', function () {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    });
