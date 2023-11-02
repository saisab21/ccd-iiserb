


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

 const header = document.querySelector('.header');
 const  register = document.querySelector(".register");
 window.addEventListener('scroll', () => {
   if (window.scrollY >= 56) {
    register.style.backgroundColor = '#4CAF50'; // Change to a different color on scroll
   } else {
    register.style.backgroundColor = '#1d398e'; // Change back to the original color when scrolled back up
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

// Get all the "Know more" buttons
const knowMoreButtons = document.querySelectorAll('.mat-raised-button');

// Loop through each button and attach a click event listener
knowMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Display the specific modal
        const modalId = `popupModal${index }`;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';

        // Set the content of the modal based on the button's position
        const modalContent = document.getElementById(`modalContent${index + 1}`);
        // Simulate content for demonstration purposes
        const contents = [
            "Content for Alumni section.",
            "Content for Rankings section.",
            "Content for admission section.",
            "Content for development section."
            // Add content for Admission Process and All Round Development sections
        ];
        modalContent.textContent = contents[index];
    });
});

// Close the modals when the user clicks the close button (×)
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = closeBtn.parentElement.parentElement;
        modal.style.display = 'none';
    });
});

// Close the modals when the user clicks outside the modals
window.addEventListener('click', function(event) {
    knowMoreButtons.forEach((button, index) => {
        const modal = document.getElementById(`popupModal${index + 1}`);
        if (event.target === modal) {
            modal.style.display = 'none';
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