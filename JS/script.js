window.addEventListener("load", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides[currentSlide].style.display = "none";
      slides[index].style.display = "block";
      currentSlide = index;
    }
  
    function nextSlide() {
      let nextIndex = currentSlide + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
  
    function prevSlide() {
      let prevIndex = currentSlide - 1;
      if (prevIndex < 0) {
        prevIndex = slides.length - 1;
      }
      showSlide(prevIndex);
    }
  
    const nextButton = document.getElementById("nextButton");
    nextButton.addEventListener("click", nextSlide);
  
    const prevButton = document.getElementById("prevButton");
    prevButton.addEventListener("click", prevSlide);
  
    showSlide(0);
    setInterval(nextSlide, 3000);
  });
  