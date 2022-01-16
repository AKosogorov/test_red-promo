document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search');
  const btn = document.querySelector('.search__btn');
  const btnСlose = document.querySelector('.search__btn-close');
  const input = document.querySelector('.search__input');


  btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (window.innerWidth < 768) {
      search.classList.toggle('search-active');
    }

    if (btnСlose.style.display === 'block') {
      btnСlose.style.display = 'none'
    }

    input.value = '';
  });

  btnСlose.addEventListener('click', (event) => {
    event.preventDefault();

    if (window.innerWidth < 768) {
    search.classList.remove('search-active')
    } else {
      btnСlose.style.display = 'none';
    }

    input.value = '';
  })

  if (window.innerWidth >= 768) {
    input.addEventListener('input', () => {
      if (input.value) {
        btnСlose.style.display = 'block'
      } else {
        btnСlose.style.display = 'none'
      }
    })
  }
});
