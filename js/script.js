// Меню бургер
const headerToggle = document.querySelector('.header__toggle');
const headerSidebar = document.querySelector('.header__sidebar');

if(headerToggle){
    headerToggle.addEventListener("click", function(e){
        headerToggle.classList.toggle('active');
        headerSidebar.classList.toggle('active');
    });
}