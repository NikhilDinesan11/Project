const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false
  },
  breakpoints: {
    // when window width is <= 480px
    450: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },

    // when window width is <= 640px
    786: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },

    // when window width is <= 640px
    992: {
      slidesPerView: 3.5,
      spaceBetween: 30
    }
  }
})

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-100px'
  }
  prevScrollpos = currentScrollPos
}

// add container
$(window).on('resize', function () {
  if ($(window).width() < 992) {
    $('.casestudy__inner').addClass('container')
  } else {
    $('.casestudy__inner').removeClass('container')
  }
})
