const floatingSection = document.getElementById("floatingSection");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let newSize = Math.min(20 + scrollY * .8, 200); 

  floatingSection.style.width = `${newSize}%`;
  floatingSection.style.height = `${newSize}vh`;
});
