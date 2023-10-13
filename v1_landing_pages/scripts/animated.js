document.addEventListener("DOMContentLoaded", function() {
    const sideMenu = document.querySelector('.side-menu');
    const pageNumbers = document.querySelectorAll('.pages span');
    const discoverMore = document.querySelector('.translate');
  
    setTimeout(() => {
      sideMenu.style.bottom = '0';
    }, 1000);
  
    for (let i = 0; i < pageNumbers.length; i++) {
      setTimeout(() => {
        pageNumbers[i].classList.add('active');
      }, 1500 + i * 500);
    }
  
    setTimeout(() => {
      discoverMore.style.opacity = '1';
    }, 1500 + pageNumbers.length * 500);
  });
  