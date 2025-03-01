const floatingSection = document.getElementById("floatingSection");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let newSize = Math.min(20 + scrollY * .6, 200); 

  floatingSection.style.width = `${newSize}%`;
  floatingSection.style.height = `${newSize}vh`;
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
