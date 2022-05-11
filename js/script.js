// Меню бургер
const headerToggle = document.querySelector('.header__toggle');
const headerSidebar = document.querySelector('.header__sidebar');

if(headerToggle){
    headerToggle.addEventListener("click", function(e){
        headerToggle.classList.toggle('active');
        headerSidebar.classList.toggle('active');
    });
}


// Прогресс Бар
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}