const switchToggle = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");

    lightMode();
  }
}
function darkMode() {
  toggleIcon.children[0].textContent = "โหมดกลางคืน";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = "rgba(0,0,0,0.5)";
}
function lightMode() {
  toggleIcon.children[0].textContent = "โหมดกลางวัน";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = "rgba(255,255,255,0.5)";
}
switchToggle.addEventListener("change", switchMode);
