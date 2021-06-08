const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.onclick = function() {
  
  document.onclick = function(e) {
    if(e.target.id !== 'toggle' && e.target.id !== 'menu') {
       toggle.classList.remove("active");
       menu.classList.remove("active");
    }
  }
  
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
}