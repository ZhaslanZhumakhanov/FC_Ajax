var mySwiper1 = new Swiper(".swiper-container1", {
  pagination: {
    el: ".photo-pagination",
    bulletClass: "photo-bullet",
    bulletActiveClass: "photo-bullet-active",
    clickable: true,
    loop: true,
  },
});

var mySwiper2 = new Swiper(".swiper-container2", {
  pagination: {
    el: ".games-pagination",
    bulletClass: "games-bullet",
    bulletActiveClass: "games-bullet-active",
    clickable: true,
    loop: true,
  },
});
