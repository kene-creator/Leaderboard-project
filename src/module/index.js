import '../styles/style.css';

const list = document.querySelectorAll('.score-list');

list.forEach((el, i) => {
  if (i % 2 === 0) {
    el.classList.add('bg-gray');
  }
});
