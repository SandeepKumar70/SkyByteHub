// const floatingSection = document.getElementById("floatingSection");

// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;
//   let newSize = Math.min(20 + scrollY * 0.2, 100);

//   floatingSection.style.width = `${newSize}%`;
//   floatingSection.style.height = `${newSize}vh`;

//   floatingSection.style.transform = `scale(${scale})`;
//   floatingSection.style.transition = "transform 0.3s ease-out"; // Smooth effect
// });

// const floatingSection = document.getElementById("floatingSection");
// let lastScrollY = 0;

// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;

//   // Calculate new width and height (start small, increase up to 100%)
//   let newSize = Math.min(20 + scrollY * 0.5, 100); // Limit to 100%

//   // Prevent excessive updates
//   if (Math.abs(scrollY - lastScrollY) > 5) {
//     requestAnimationFrame(() => {
//       floatingSection.style.width = `${newSize}%`;
//       floatingSection.style.height = `${newSize}vh`;
//       floatingSection.style.transition = "all 0.4s ease-out"; // Smooth effect
//     });

//     lastScrollY = scrollY;
//   }
// });


// trusted section 
const textArray = ["Top Designers", "150K Clients"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentText = textArray[index];
    let displayText = isDeleting 
        ? currentText.substring(0, charIndex--) 
        : currentText.substring(0, charIndex++);
    
    document.getElementById("dynamicText").textContent = displayText;

    if (!isDeleting && charIndex === currentText.length + 1) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// faq 
document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll("#faq-container details");

  detailsElements.forEach((details) => {
    details.addEventListener("click", function () {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== details) {
          otherDetails.removeAttribute("open");
        }
      });
    });
  });
});
// footer change year every year automatically 
document.getElementById("year").textContent = new Date().getFullYear();
