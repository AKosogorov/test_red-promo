document.addEventListener('DOMContentLoaded', () => {
  if(window.innerWidth < 1200) {
    const nav = document.querySelector('.nav');
    const btn = nav.querySelector('.nav__btn');
    const dropdown = nav.querySelector('.nav__list');
    const navbg = document.querySelector('.nav-bg');
    const navLinks = dropdown.querySelectorAll('.nav__link');

    btn.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navbg.classList.toggle('nav-bg--active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        navbg.classList.remove('nav-bg--active');
      });
    })

    navbg.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      navbg.classList.remove('nav-bg--active');
    });
  };
});
