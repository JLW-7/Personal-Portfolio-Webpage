document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").classList.remove("hidden");
  }, 2000); // Simulate loading time
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

window.addEventListener('scroll', () => {
    const image = document.querySelector('.about-me-image img.slide-in-image');
    
    if (isInView(image)) {
      image.classList.add('visible');
    }
});
  
