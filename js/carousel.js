var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        // Hide all slides
        document.querySelectorAll(".slide").forEach(function (el) {
          el.classList.add("hidden");
        });
      },
      slideChangeTransitionEnd: function () {
        // Show active slide and next two slides
        var activeIndex = swiper.activeIndex;
        for (var i = activeIndex; i < activeIndex + 3; i++) {
          if (i < swiper.slides.length) {
            swiper.slides[i].classList.remove("hidden");
          }
        }
      },
      init: function (swiper) {
        // Show first three slides on init
        for (var i = 0; i < 3; i++) {
          if (i < swiper.slides.length) {
            swiper.slides[i].classList.remove("hidden");
          }
        }
      },
    },
  });
  


  // const carouselItems = [
//         // {
//         //     imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137226/Background_3_eohazm.png",
//         //     name: "Rituraj Verma",
//         //     position: "State president , Bihar.",
//         // },
//         // {
//         //     imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137225/Background_1_bvaogp.png",
//         //     name: "Anisha Sinha",
//         //     position: "District Coordinator ,Giridih , Jharkhand.",
//         // },
//     {
//         imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137225/Background_2_vw76np.png",
//         name: "Sameer Kumar",
//         position: "ZONAL HEAD SHAHABAD, BIHAR",
//     },
//     {
//         imgSrc: "images/Mukesh_kumar_sinha.jpg",
//         name: "Mukesh Kumar Sinha",
//         position: "State president , Jharkhand."
//     },
//     {
//         imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137227/Background_5_aykakz.png",
//         name: "ISHHAQUE NABI",
//         position: "C.O.O"
//     },
//     {
//         imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137225/Background_2_vw76np.png",
//         name: "Mithilesh Kumar",
//         position: "District Coordinator, Gaya , BIHAR."
//     },
//     {
//         imgSrc: "https://res.cloudinary.com/dyglpqlsj/image/upload/v1710137227/Background_8_nbyf3h.png",
//         name: "Amit Kumar",
//         position: "District coordinator, vaahan yojana coordinator, Giridih, Jharkand."
//     }
// ];
  