// const floatingSection = document.getElementById("floatingSection");

// window.addEventListener("scroll", () => {
//   let scrollY = window.scrollY;
//   let newSize = Math.min(20 + scrollY * 0.2, 100);

//   floatingSection.style.width = `${newSize}%`;
//   floatingSection.style.height = `${newSize}vh`;

//   floatingSection.style.transform = `scale(${scale})`;
//   floatingSection.style.transition = "transform 0.3s ease-out"; // Smooth effect
// });




const floatingSection = document.getElementById("floatingSection");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  // Calculate new width and height (start small, increase up to 100%)
  let newSize = Math.min(20 + scrollY * 0.5, 100); // Limit to 100%

  // Prevent excessive updates
  if (Math.abs(scrollY - lastScrollY) > 5) {
    requestAnimationFrame(() => {
      floatingSection.style.width = `${newSize}%`;
      floatingSection.style.height = `${newSize}vh`;
      floatingSection.style.transition = "all 0.4s ease-out"; // Smooth effect
    });

    lastScrollY = scrollY;
  }
});
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
