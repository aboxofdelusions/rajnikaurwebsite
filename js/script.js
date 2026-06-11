document.addEventListener('click', function (e) {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  const toggle = e.target.closest('.dropdown-toggle');
  if (toggle) {
    dropdown.classList.toggle('open');
    return;
  }

  if (!e.target.closest('.dropdown')) {
    dropdown.classList.remove('open');
  }
});
