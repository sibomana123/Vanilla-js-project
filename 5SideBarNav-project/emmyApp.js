const menu = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");



menu.addEventListener('click', () => {
  sideBar.classList.toggle("show-sidebar");

  // sideBar.classList.replace("sidebar", "show-sidebar");

})

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");

});