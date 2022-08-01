(() => {
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76237108373073, 37.627896104841895],
      autoFitToViewport: 'always',
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
    }, {
      // При сложных перестроениях можно выставить автоматическое
      // обновление карты при изменении размеров контейнера.
      // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
      autoFitToViewport: 'always',
      searchControlProvider: 'yandex#search'
    });
    var myPlacemark = new ymaps.Placemark([55.77061413777131, 37.63485175194549], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/point.png',
      iconImageSize: [12, 12],
      // iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.

    myMap.geoObjects.add(myPlacemark);
  }
  ymaps.ready(init);


  function tabs(btnTab, btnTabActive, content, contentActive, content2 = '', contentActive2 = '') {
    document.addEventListener('DOMContentLoaded', function() {




      document.querySelectorAll(btnTab).forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
          event.preventDefault();
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll(btnTab).forEach(element => { element.classList.remove(btnTabActive) });
          tabsBtn.classList.add(btnTabActive)
          document.querySelectorAll(content).forEach(function(tabContent) {
            tabContent.classList.remove(contentActive)
          })
          document.querySelector(`[data-target="${path}"]`).classList.add(contentActive);
          if (event.currentTarget.dataset.path2) {
            const path2 = event.currentTarget.dataset.path2;
            document.querySelectorAll(content2).forEach(function(tabContent) {
              tabContent.classList.remove(contentActive2);
              document.querySelector(`[data-target="${path2}"]`).classList.add(contentActive2);
            })
          }
        })
      })
    });
  }
  tabs('.section-project__tab', 'section-project__tab-active', '.section-project__content', 'section-project__content-active')
  tabs('.section-services__btn', 'section-services__btn-active', '.section-services__left-list', 'section-services__left-list-active', '.services-list', 'services-list-active')

  new JustValidate('.section-contacts__form', {
    colorWrong: '#FF3030',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      email: {
        required: true,
        email: true
      },
      text: {
        required: true,
        minLength: 5,
        maxLength: 300
      }
    },
    messages: {
      name: {
        required: 'Как вас зовут?'
      },
      email: {
        required: 'Укажите вашу почту правильно',
        email: 'Укажите вашу почту правильно'
      },
      text: {
        required: 'Введите текст',
        minLength: 'Минимально 5 символа',
        maxLength: 'Максимально 300 символов'
      }
    }
  })

  // search
  function muteFormSearch() {
    document.querySelector('.header__btn-open-search').addEventListener('click', function(e) {
      document.querySelector('.header__container-search').classList.add('header__container-search_active');
      if (window.outerWidth > 672) {
        document.querySelector('.header-bottom__tel').classList.add('header-bottom__tel_mute');
      }
      this.classList.add('header__btn-open-search_mute')
      if (window.outerWidth < 578) {
        document.querySelector('.header__logo').classList.add('header__logo_mute');
      }
    })

    document.querySelector('.header__btn-close-search').addEventListener('click', function(e) {
      document.querySelector('.header__container-search').classList.remove('header__container-search_active');
      document.querySelector('.header-bottom__tel').classList.remove('header-bottom__tel_mute');
      document.querySelector('.header__btn-open-search').classList.remove('header__btn-open-search_mute');
      document.querySelector('.header__logo').classList.remove('header__logo_mute');

    })
  }
  muteFormSearch()





  // замена изображений
  function imgChangeSrc() {
    if (window.outerWidth < 1025) {
      // hero
      document.querySelector('.section-hero__img1').src = './images/hero-item1-1024.jpg';
      document.querySelector('.section-hero__img2').src = './images/hero-item2-1024.jpg';
      document.querySelector('.section-hero__img3').src = './images/hero-item3-1024.jpg';
      document.querySelector('.section-master__img1').src = './images/Rectangle21-3-1024.jpg';
      document.querySelector('.section-master__img2').src = './images/Rectangle21-4-1024.jpg';
      document.querySelector('.section-master__img3').src = './images/Rectangle21-1024.jpg';
      document.querySelector('.section-master__img4').src = './images/Rectangle21-2-1024.jpg';
      document.querySelector('.section-services__tab1-image1').src = './images/services1-1024.jpg';
      document.querySelector('.section-services__tab1-image2').src = './images/services2-1024.jpg';
      document.querySelector('.section-services__tab1-image3').src = './images/services3-1024.jpg';
      document.querySelector('.section-services__tab1-image4').src = './images/services4-1024.jpg';
      document.querySelector('.section-services__tab1-image5').src = './images/services5-1024.jpg';
      document.querySelector('.section-services__tab2-image1').src = './images/s-2-1-1024.jpg';
      document.querySelector('.section-services__tab2-image2').src = './images/s-2-2-1024.jpg';
      document.querySelector('.section-services__tab2-image3').src = './images/s-2-3-1024.jpg';
      document.querySelector('.section-services__tab2-image4').src = './images/s-2-4-1024.jpg';
      document.querySelector('.section-services__tab2-image5').src = './images/s-2-5-1024.jpg';
      document.querySelector('.section-services__tab2-image6').src = './images/s-2-6-1024.jpg';
      document.querySelector('.section-services__tab2-image7').src = './images/s-2-7-1024.jpg';
      document.querySelector('.section-services__tab2-image8').src = './images/s-2-8-1024.jpg';
      document.querySelector('.section-services__tab2-image9').src = './images/s-2-9-1024.jpg';
      document.querySelector('.section-services__tab2-image10').src = './images/s-2-10-1024.jpg';
    }
    if (window.outerWidth < 769) {
      document.querySelector('.section-services__tab1-image1').src = './images/services1-768.jpg';
      document.querySelector('.section-services__tab1-image2').src = './images/services2-768.jpg';
      document.querySelector('.section-services__tab1-image3').src = './images/services3-768.jpg';
      document.querySelector('.section-services__tab1-image4').src = './images/services4-768.jpg';
      document.querySelector('.section-services__tab1-image5').src = './images/services5-768.jpg';
      document.querySelector('.section-services__tab2-image1').src = './images/s-2-1-768.jpg';
      document.querySelector('.section-services__tab2-image2').src = './images/s-2-2-768.jpg';
      document.querySelector('.section-services__tab2-image3').src = './images/s-2-3-768.jpg';
      document.querySelector('.section-services__tab2-image4').src = './images/s-2-4-768.jpg';
      document.querySelector('.section-services__tab2-image5').src = './images/s-2-5-768.jpg';
      document.querySelector('.section-services__tab2-image6').src = './images/s-2-6-768.jpg';
      document.querySelector('.section-services__tab2-image7').src = './images/s-2-7-768.jpg';
      document.querySelector('.section-services__tab2-image8').src = './images/s-2-8-768.jpg';
      document.querySelector('.section-services__tab2-image9').src = './images/s-2-9-768.jpg';
      document.querySelector('.section-services__tab2-image10').src = './images/s-2-10-768.jpg';
    }
    if (window.outerWidth < 410) {
      document.querySelector('.services-tab1-img1').src = './images/Rectangle43-320.jpg';
      document.querySelector('.services-tab1-img2').src = './images/Rectangle44-320.jpg';
      document.querySelector('.services-tab1-img3').src = './images/Rectangle45-320.jpg';
      document.querySelector('.services-tab1-img4').src = './images/Rectangle46-320.jpg';
      document.querySelector('.services-tab1-img5').src = './images/Rectangle28-320.jpg';
      document.querySelector('.services-tab1-img6').src = './images/Rectangle32-320.jpg';
      document.querySelector('.services-tab1-img7').src = './images/Rectangle36-320.jpg';
      document.querySelector('.services-tab1-img8').src = './images/Rectangle40-320.jpg';
      document.querySelector('.services-tab1-img9').src = './images/Rectangle29-320.jpg';
      document.querySelector('.services-tab1-img10').src = './images/Rectangle34-320.jpg';
      document.querySelector('.services-tab1-img11').src = './images/Rectangle38-320.jpg';
      document.querySelector('.services-tab1-img12').src = './images/Rectangle42-320.jpg';
      document.querySelector('.services-tab1-img13').src = './images/Rectangle30-320.jpg';
      document.querySelector('.services-tab1-img14').src = './images/Rectangle33-320.jpg';
      document.querySelector('.services-tab1-img15').src = './images/Rectangle37-320.jpg';
      document.querySelector('.services-tab1-img16').src = './images/Rectangle41-320.jpg';
    }

  }
  document.getElementsByTagName("BODY")[0].onresize = imgChangeSrc();
  imgChangeSrc();






  let nav = document.querySelector('.header__nav')
  let menu = document.querySelector('.menu-burger');

  TweenMax.set(menu, { autoAlpha: 0, display: 'none' });

  let tlMenu = gsap.timeline({ paused: true });

  tlMenu.to(menu, { autoAlpha: 1, display: 'block' })
    .to(nav, { opacity: 1, x: 10, }, '>-0.2')


  .from('.header__burger-tel', {
    opacity: 0,
    x: -20,
  }, '>-0.2');

  // burger



  const btnOpenBurger = document.querySelector('.header__burger-btn');
  const btnCloseBurger = document.querySelector('.menu-burger__close');

  btnOpenBurger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header__nav').classList.add('header__nav-open')
    tlMenu.play();

  });

  btnCloseBurger.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header__nav').classList.remove('header__nav-open')
    tlMenu.reverse();

  });

})();
