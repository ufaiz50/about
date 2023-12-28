$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  // $btns.click(function (e) {
  //   $(".project-area .button-group button").removeClass("active");
  //   e.target.classList.add("active");
  //   let selector = $(e.target).attr("data-filter");
  //   $(".project-area .grid").isotope({
  //     filter: selector,
  //   });
  //   return false;
  // });

  $(".project-area .button-group #btn1").trigger("click");

  // $(".project-area .grid .test-popup-link").magnificPopup({
  //   type: "image",
  //   gallery: { enabled: true },
  // });

  //owl-carousel
  // $(".site-main .about-area .owl-carousel").owlCarousel({
  //   loop: true,
  //   autoplay: true,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     544: {
  //       items: 2,
  //     },
  //   },
  // });

  // sticky navigation menu

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});

document.getElementById('theme_change').addEventListener('click', function() {
  const themeIcon = document.querySelector('.sticky-theme__icon');
  
  // Check if dark-mode class is present
  if (themeIcon.classList.contains('dark-mode')) {
    // Remove dark-mode and add light-mode
    themeIcon.classList.remove('dark-mode');
    themeIcon.classList.add('light-mode');
    this.style.backgroundColor = '#f5f5f5';
    darkMode();
  } else {
    // Remove light-mode and add dark-mode
    themeIcon.classList.remove('light-mode');
    themeIcon.classList.add('dark-mode');
    this.style.backgroundColor = '#222e3b';
    lightMode()
  }
});

function darkMode(){
  let eMain = document.querySelector('.site-main');
  eMain.style.backgroundColor = '#333333'
  eMain.style.color = '#fff'
}

function lightMode(){
  let eMain = document.querySelector('.site-main');
  eMain.style.backgroundColor = '#fff'
  eMain.style.color = 'black'
}