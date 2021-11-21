const darkMode = document.querySelector(".theme-toggle");
const colorWhite = document.querySelector(".intro__subtitle");
const upButton = document.querySelector('.up-button');

function darkify() {
   if (document.documentElement.classList.toggle("theme--night")) {
      colorWhite.style.color = '#ffffff';
   } else {
      colorWhite.style.color = '';
   }
}
darkMode.addEventListener("click", darkify);

window.onscroll = function () {
   if (window.pageYOffset > 200) {
      upButton.classList.add('shown')
   }
};