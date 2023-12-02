
const sliderBox = document.querySelector(".testimonials-tp__review-slider");
const allSlides = document.querySelectorAll(".testimonials-tp__review-slider__slide");
const numOfSlides = allSlides.length - 1 ;

allSlides[numOfSlides].classList.add("previous");
allSlides[0].classList.add("active");
allSlides[1].classList.add("next");

let activeSlide  = 0;
let loop;

export const slider = () => {
     // Moving to the next slide after 2s:
     loop = setInterval(sliding, 4000);
}

const sliding = () => {
    
    setNext();

}

const setNext = () => {
    
    allSlides[activeSlide].classList.remove("active");
    allSlides[activeSlide].classList.add("previous");
    
    let next = activeSlide < numOfSlides ? activeSlide + 1 : 0 ;
    allSlides[next].classList.remove("previous");
    allSlides[next].classList.remove("next");
    allSlides[next].classList.add("active");
    
    
    if(next < numOfSlides){
        allSlides[next+1].classList.remove("previous");
        allSlides[next+1].classList.add("next");
      }  
      
      else {
        allSlides[0].classList.remove("previous");
        allSlides[0].classList.add("next");
      }

      activeSlide = next;
      trackSlide = activeSlide;           
}

sliderBox.addEventListener("touchstart", event => {
  event.preventDefault();
  clearInterval(loop);
  
});

sliderBox.addEventListener("touchend", event => {
  event.preventDefault();
  loop = setInterval(sliding, 4000);
});



