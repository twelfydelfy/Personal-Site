const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elementsToObserve = document.querySelectorAll('*');

elementsToObserve.forEach((el) => {
  if (!el.matches('header')) {
    el.classList.add('hidden');
    observer.observe(el);
  }
});

const header = document.querySelector('header');
observer.observe(header); 