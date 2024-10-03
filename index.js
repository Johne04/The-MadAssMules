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
      enabled: true
    }
  });
});

