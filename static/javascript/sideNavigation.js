const sideBar = document.getElementById("mySidenav");
const humIcon = document.getElementById("hum-icon");
const closeBtn = document.getElementById('close-button')

const togleNavBar = () => {
  sideBar.classList.toggle("hide");
  humIcon.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
};

const closeNav = () => {
  sideBar.classList.toggle("hide");
  humIcon.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
}
