const darkMode = document.querySelector(".theme-toggle");
const colorWhite = document.querySelector(".intro__subtitle");

function darkify() {
   if (document.documentElement.classList.toggle("theme--night")) {
      colorWhite.style.color = '#ffffff';
   } else {
      colorWhite.style.color = '';
   }
}
darkMode.addEventListener("click", darkify);