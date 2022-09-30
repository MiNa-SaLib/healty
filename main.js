// menu in nav=========================
let menu = document.getElementById("menubar");
let listInNav = document.querySelector("nav ul");
document.addEventListener("click", function (e) {
  console.log(e.target.id);
  if (e.target.id == "menubar") {
    listInNav.classList.toggle("CustomTopToMenu");
  } else listInNav.classList.remove("CustomTopToMenu");
});
//=================================
////show to top button
let toTop = document.querySelector(".toTop");
window.onscroll = function () {
  if (window.scrollY >= 100) {
    toTop.style.display = "flex";
  }
  if (window.scrollY <= 100) {
    toTop.style.display = "none";
  }
};

//=================================
//=================================
//dark mood
let dark = document.getElementById("dark");
let navColor = document.querySelectorAll(".linkInNav");
let logoIncontact = document.querySelectorAll(".contactDetals a");
let swiperSlideDiv = document.querySelectorAll(".swiper-slide div ");
// console.log(navColor);
dark.addEventListener("click", function () {
  document.body.classList.toggle("darkMood");
  navColor.forEach(function (e) {
    e.classList.toggle("darkMood");
    console.log(e);
  });
  logoIncontact.forEach(function (e) {
    console.log(e);
    e.classList.toggle("darkMood");
  });
  swiperSlideDiv.forEach(function (e) {
    console.log(e);
    e.classList.toggle("darkMoodColorBlack");
  });
  swiperSlideDiv.classList.toggle("darkMoodColorBlack");
});

//=================================

const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
