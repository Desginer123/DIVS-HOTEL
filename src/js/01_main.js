
const menuBtn = document.querySelector('.menu__btn');
const closeBtn = document.querySelector('.menu__close-btn');
const menu = document.querySelector('.menu');


function addHide(e) {
  if(!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.add('hide')
  }
}


menuBtn.addEventListener('click', function() {
  menu.classList.remove('hide');
  document.addEventListener('click', addHide);

});
closeBtn.addEventListener('click', function() {
  menu.classList.add('hide');
  document.removeEventListener('click', addHide);
});

let headerBtn = document.querySelector('.header__btn'),
    booking = document.querySelector('.intro__booking'),
    closeBooking = document.getElementById('close-booking'),
    tooltipLink = document.querySelector('.tooltype__link'),
    tooltipBody = document.querySelector('.tooltype'),
    textareaLink = document.querySelector('.intro__booking-textarea_link'),
    textarea = document.getElementById('comment'),
    texareaClose = document.querySelector('.close-comment')
    closeTooltip = document.querySelector('.tooltype-close');

document.addEventListener('DOMContentLoaded', () => {
  function hideTooltip(e) {
    if(!tooltipLink.contains(e.target) && !tooltipBody.contains(e.target)) {
      tooltipBody.classList.add('dn')
    }
  }
  headerBtn.addEventListener('click', (e) => {
    booking.classList.remove('dn');
  });
  tooltipLink.addEventListener('click', () => {
    tooltipBody.classList.toggle('dn')
  });
  closeTooltip.addEventListener('click', () => {
    tooltipBody.classList.add('dn')
  });
  booking.addEventListener('click', hideTooltip);
  textareaLink.addEventListener('click', () => {
    textarea.classList.remove('dn');
    textareaLink.classList.add('dn');
    texareaClose.classList.remove('hide')
  }),
  headerBtn.addEventListener("click", (e) => {
  booking.classList.remove("hidden");
  });
  closeBooking.addEventListener("click", () => {
    booking.classList.add("hidden");
  });
  texareaClose.addEventListener('click', () => {
    textarea.classList.add('dn');
    textareaLink.classList.remove('dn');
    texareaClose.classList.add('hide')

  });

  let guestItems = document.querySelectorAll('.guest__items--item');
  guestItems.forEach((item,key) => {
    let btn = item.querySelector('.guest-btn'),
        guestIcon = item.querySelector('.guest-img--icon'),
        guestList = item.querySelector('.guest-list'),
        subinfo = item.querySelector('.guest-subinfo'),
        guestSquare = item.querySelector('.gues-squar'),
        luxText = item.querySelector('.lux-text'),
        tabsWrapper = item.querySelector('.tabs-wrapper');
      btn.addEventListener('click', () => {

        guestIcon.classList.toggle('guest-hidden')
        if(guestList != null) {
          guestList.classList.toggle('guest-hidden')
        }
        if(luxText != null) {
          luxText.classList.toggle('guest-hidden')
        }
        subinfo.classList.toggle('guest-hidden')
        guestSquare.classList.toggle('guest-hidden')
        btn.classList.toggle('revert')
        tabsWrapper.classList.toggle('guest-hidden')
        tabs = item.querySelectorAll('.tabs-link'),
    // tabs content with same index
        tabsContent = item.querySelectorAll('.tabs-content'),
    // wrapper of btn
        wrapper = item.querySelector('.tabs-link-wrapper');

    function hideTabsContent() {
        // hide all tabs content
        tabsContent.forEach(e => {
            e.classList.add('tab-hidden')
        });
        tabs.forEach(e => {
            // remove all active
            e.classList.remove('tabs-link-active');
        })
    };
    function showTabContent(e) {
        // show target tab default item (first)
        tabsContent[e].classList.remove('tab-hidden')
        tabs[e].classList.add('tabs-link-active');

    };
    // hide all tabs
    hideTabsContent();
    showTabContent(0)



    wrapper.addEventListener('click', function(event) {
        // get all tabs. 1 element = item and have a key
        tabs.forEach((item2,key) => {
            // if we click on item
            if(event.target == item2 && ! item2.classList.contains('tabs-link-active')) {
                // hide all others
                hideTabsContent()
                // show chosen
                showTabContent(key);
            };
        });
    });
      });
  });
});


const body = document.querySelector('body')

function scrollFunction() {
  const t = document.querySelector("header");
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? t.classList.add("bgwhite") : t.classList.remove("bgwhite");
};
window.onscroll = (() => {
  scrollFunction();
});









let instSwiper = new Swiper(".inst-slider", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  centeredSlides: true,
  // slidesPerView: 3,
  initialSlide: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    773: {
      slidesPerView: 3,
    }
  },
});



if (window.innerWidth < 1180) {
  let gallery__grid = document.querySelector('.gallery-slider .swiper-wrapper');
  if (gallery__grid != null) {
    gallery__grid.classList.remove('gallery__grid')
  }
  let linksCollection = document.querySelectorAll('.grid__image img');
  linksCollection.forEach((item, i) => {
    console.log(item)
    let dataSrc = item.getAttribute('data-imagesrc');
    let src = item.getAttribute('src')
    item.setAttribute('src', dataSrc)
  });

  let gallerySwiper = new Swiper(".gallery-slider", {
    centeredSlides: true,
    breakpoints: {
      772: {
        slidesPerView: 4,
        initialSlide: 1,

        spaceBetween: 30,
      },
      500: {
        slidesPerView: 2,
        initialSlide: 1,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    initialSlide: 0,
    slideToClickedSlide: true,
    draggable: true,
   });
  }


let swiper = new Swiper(".deals-container", {
  effect: "coverflow",
  grabCursor: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  centeredSlides: true,
  slideToClickedSlide: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      coverflowEffect: {
        rotate: 0,
        depth: 300,
        modifier: 1,
      },
      initialSlide: 2,

    },
    772: {
      slidesPerView: 2,
      initialSlide: 2,

    },
    320: {
      slidesPerView: 1,
      initialSlide: 2,

    },
  },
  coverflowEffect: {
    rotate: 0,
    depth: 000,
    modifier: 0,
  },

 });

 let modalTrigger2 = document.querySelectorAll('[data-modal2]'),
 modal2 = document.querySelector('.modal2'),
 modalCloseBtn2 = document.querySelector('[data-close2]');


 // get all btns

function openModal2() {

 modal2.classList.add('show');
     modal2.classList.remove('hide');
     document.body.style.overflow = 'hidden'

}

modalTrigger2.forEach((btn) => {
 btn.addEventListener('click', openModal2)
})
//close modal function
function closeModal2() {
 modal2.classList.remove('show');
 modal2.classList.add('hide');
 document.body.style.overflow = ''
 document.body.style.paddingRight = ''

}
//close modal on cross click
modalCloseBtn2.addEventListener('click', closeModal2)
// close modal on click an background
modal2.addEventListener('click', (e) => {
 if (e.target === modal2) {
     closeModal2()
 }
})

// escape key close modal

document.addEventListener('keydown', (e) => {
 if (e.code === 'Escape' && modal.classList.contains('show')) {
     closeModal()
 }
});


let modalTrigger = document.querySelectorAll('[data-modal]'),
 modal = document.querySelector('.modal'),
 modalCloseBtn = document.querySelector('[data-close]');


 // get all btns

function openModal() {

 modal.classList.add('show');
     modal.classList.remove('hide');
     document.body.style.overflow = 'hidden'

}

modalTrigger.forEach((btn) => {
 btn.addEventListener('click', openModal)
})
//close modal function
function closeModal() {
 modal.classList.remove('show');
 modal.classList.add('hide');
 document.body.style.overflow = ''
 document.body.style.paddingRight = ''

}
//close modal on cross click
modalCloseBtn.addEventListener('click', closeModal)
// close modal on click an background
modal.addEventListener('click', (e) => {
 if (e.target === modal) {
     closeModal()
 }
})

// escape key close modal

document.addEventListener('keydown', (e) => {
 if (e.code === 'Escape' && modal.classList.contains('show')) {
     closeModal()
 }
});


if (window.innerWidth > 1024) {
  function showBooking() {
    document.querySelector('.intro__booking').classList.remove('hidden')
  }
  document.addEventListener("DOMContentLoaded", () => setTimeout(showBooking, 3000));
}


if (window.location.href.indexOf('guest') > -1) {
  document.querySelector('.footer').style.background = '#fff'
}


let guestSlider = new Swiper(".guest-slider", {
  effect: 'coverflow',
  grabCursor: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 1,
  breakpoints: {
    780: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        depth: 300,
        modifier: 1,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    },
  },
  coverflowEffect: {
    rotate: 0,
    depth: 00,
    modifier: 0,
  },
  slideToClickedSlide: true,

  // loop: true
 });
 let guestSlider2 = new Swiper(".guest-slider2", {
   effect: 'coverflow',
   grabCursor: true,
   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   centeredSlides: true,
   slidesPerView: 1,
   initialSlide: 0,
   breakpoints: {
     780: {
       slidesPerView: 3,
       initialSlide: 1,
       coverflowEffect: {
         rotate: 0,
         depth: 300,
         modifier: 1,
       },
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
         },
     },
   },
   coverflowEffect: {
     rotate: 0,
     depth: 00,
     modifier: 0,
   },
   slideToClickedSlide: true,

   // loop: true
  });
  let guestSlider3 = new Swiper(".guest-slider3", {
    effect: 'coverflow',
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    breakpoints: {
      780: {
        slidesPerView: 3,
        initialSlide: 1,
        coverflowEffect: {
          rotate: 0,
          depth: 300,
          modifier: 1,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      },
    },
    coverflowEffect: {
      rotate: 0,
      depth: 00,
      modifier: 0,
    },
    slideToClickedSlide: true,

    // loop: true
   });
   let guestSlider4 = new Swiper(".guest-slider4", {
     effect: 'coverflow',
     grabCursor: true,
     navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     centeredSlides: true,
     slidesPerView: 1,
     initialSlide: 1,
     breakpoints: {
       780: {
         slidesPerView: 3,
         initialSlide: 1,
         coverflowEffect: {
           rotate: 0,
           depth: 300,
           modifier: 1,
         },
         navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           },
       },
     },
     coverflowEffect: {
       rotate: 0,
       depth: 00,
       modifier: 0,
     },
     slideToClickedSlide: true,

     // loop: true
    });
    let guestSlider5 = new Swiper(".guest-slider5", {
      effect: 'coverflow',
      grabCursor: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      centeredSlides: true,
      slidesPerView: 1,
      initialSlide: 1,
      breakpoints: {
        780: {
          slidesPerView: 3,
          initialSlide: 1,
          coverflowEffect: {
            rotate: 0,
            depth: 300,
            modifier: 1,
          },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        },
      },
      coverflowEffect: {
        rotate: 0,
        depth: 00,
        modifier: 0,
      },
      slideToClickedSlide: true,

      // loop: true
     });
 const lightboxContainer = document.querySelector('.lightbox-container');

 if (lightboxContainer != null) {
   const lightboxEnablet = document.querySelectorAll('.grid__image');
   const lightboxArray = Array.from(lightboxEnablet);
   const lastImage = lightboxArray.length - 1;
   const lightboxImage = document.querySelector('.lightbox-image');
   const lightboxBtns = document.querySelectorAll('.lightbox-btn');
   const lightboxLefttBtn = document.querySelector('#left');
   const lightboxRightBtn = document.querySelector('#right');
   let activeImage
   const showLigthbox = () => {lightboxContainer.classList.add('active')}
   const hideLigthbox = () => {lightboxContainer.classList.remove('active')}
   const setActiveImage = (image) => {
     let innerImage = image.querySelector('img');
     lightboxImage.src = innerImage.dataset.imagesrc;
     activeImage = lightboxArray.indexOf(image)
   }

   lightboxEnablet.forEach((image) => {
     image.removeAttribute('href')
     image.addEventListener('click', (e) => {
       showLigthbox();
       setActiveImage(image)
     })
   })
   lightboxContainer.addEventListener('click', () => {
     hideLigthbox();
   })

   const transitionSlideLeft = () => {
     lightboxLefttBtn.focus()
     activeImage === 0 ? setActiveImage(lightboxArray[lastImage]) : setActiveImage(lightboxArray[activeImage].previousElementSibling)
   }

   const transitionSlideRight = () => {
     lightboxRightBtn.focus()
     activeImage === lastImage ? setActiveImage(lightboxArray[0]) : setActiveImage(lightboxArray[activeImage].nextElementSibling)

   }

   const transitionSlideHandler = (moveItem) => {
     moveItem.includes('left') ? transitionSlideLeft() : transitionSlideRight();
   }

   lightboxBtns.forEach((btn) => {
     btn.addEventListener('click', (e) => {
       e.stopPropagation();
       transitionSlideHandler(e.currentTarget.id);
     })
   })
 } else {
   // do nothing
 }
