document.querySelectorAll('.book-carousel').forEach(function (carousel) {
  const imgs = carousel.querySelectorAll('.carousel-img');
  let current = 0;

  function show(index) {
    imgs[current].classList.remove('active');
    current = (index + imgs.length) % imgs.length;
    imgs[current].classList.add('active');
  }

  carousel.querySelector('.carousel-prev').addEventListener('click', function () { show(current - 1); });
  carousel.querySelector('.carousel-next').addEventListener('click', function () { show(current + 1); });
});

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
