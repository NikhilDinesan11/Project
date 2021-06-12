//  WE offer
const stickyImage = document.body.querySelector('.sticky-image')
const stickyImage2 = document.body.querySelector('.sticky-image-2')

var swiper = new Swiper('.mySwiper2', {
  // slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,

  loopFillGroupWithBlank: true,
  keyboard: {
    enabled: true
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 0,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})

// Whap our client says

var swiper = new Swiper('.mySwiper', {
  // slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    450: {
      slidesPerView: 1,
      spaceBetween: 0,
      spaceBetween: 70
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 70
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

window.addEventListener('resize', function (e) {
  handleStickyImage()
})

const handleStickyImage = function () {
  const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width
  if (screenWidth > 990) {
    document.addEventListener('scroll', function (e) {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > 675 && currentScrollPos < 1390) {
        stickyImage.style.position = 'fixed'
        stickyImage2.style.visibility = 'hidden'
      } else {
        stickyImage.style.position = 'static'
        stickyImage2.style.visibility = 'visible'
      }
    })
  }
}

handleStickyImage()
