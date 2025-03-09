const btn = document.querySelector(".header__burger-button");
const overlay = document.querySelector("#mobileOverlay");

btn.addEventListener("click", function () {
  overlay.showModal();
});
