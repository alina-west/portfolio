let navbarmenu = document.querySelector(".navbarmenu");

document.querySelector("#menu-btn").onclick = () => {
  navbarmenu.classList.toggle("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbarmenu.classList.remove("active");
};

window.onscroll = () => {
  navbarmenu.classList.remove("active");
  searchForm.classList.remove("active");
};

/*----darkmode--*/
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  showSlide(currentSlide);

  prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
});

let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
