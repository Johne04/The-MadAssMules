function showGallery(galleryNumber) {
  // Hide all galleries
  document.querySelectorAll(".gallery").forEach((gallery) => {
    gallery.classList.remove("active");
  });

  // Show the selected gallery
  document.getElementById(`gallery${galleryNumber}`).classList.add("active");

  // Update active state of navigation buttons
  document.querySelectorAll(".gallery-nav button").forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`.gallery-nav button:nth-child(${galleryNumber})`)
    .classList.add("active");
}

$(document).ready(function () {
  $(".video-gallery").magnificPopup({
    delegate: "a",
    type: "iframe",
    gallery: {
      enabled: true,
    },
  });
});

const galleries = document.querySelectorAll('.gallery');
const lists = document.getElementById('lists');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let currentIndex = 0;

function updateSlider() {
  lists.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? galleries.length - 1 : currentIndex - 1;
  updateSlider();
});

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === galleries.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

updateSlider();