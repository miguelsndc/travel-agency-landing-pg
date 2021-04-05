const header = document.getElementById('menu');

function toggleActiveHeader() {
  const elDistanceToTop =
    window.pageYOffset + header.getBoundingClientRect().top;

  if (elDistanceToTop > 200) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

window.addEventListener('scroll', toggleActiveHeader);
