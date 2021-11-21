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


const upButton = document.querySelector('.up-button');

window.onscroll = function () {
   if (window.pageYOffset > 200) {
      upButton.classList.add('shown')
   } else {
      upButton.classList.remove('shown');
   }
};

upButton.onclick = function () {
   window.scrollTo(0, 0);
};