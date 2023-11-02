


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// scroll-navbar
 const navEl = document.querySelector('.header');

 window.addEventListener('scroll', () => {
  if(window.scrollY >= 56 ){
    navEl.classList.add('navbar-scrolled');
  } else if(window.scrollY < 56 ){
    navEl.classList.remove('navbar-scrolled');
  }
 });


 //pop-up
// Get all elements for pop-up modal
const popups = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.mat-card-actions button');

// Function to toggle the display of the modal
function toggleModal(modal) {
  modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Adding event listeners to the buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleModal(popups[index]);
  });
});

// Close the modal when the 'x' (close button) is clicked
popups.forEach((popup) => {
  const closeBtn = popup.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    toggleModal(popup);
  });

  // Close the modal when clicking outside the modal
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      toggleModal(popup);
    }
  });
});






/////////////// scroll top ///////////////////////////
var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;
var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
    docBody.scrollTop = focElem.scrollTop = newPos;
    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}
var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;
    speed && (stepAmount = (topOffset * stepTime)/speed);
    scrollAnimationStep(topOffset, stepAmount);
};