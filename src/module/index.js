import '../styles/style.css';
import { refreshScoreList, addScore } from './helper';
import { API_URL } from './config';

const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('form');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');

refreshBtn.addEventListener('click', (e) => {
  refreshScoreList(API_URL);
  console.log(e.target);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputName.value === '' && inputScore.value === '') return;
  addScore(e);
  form.reset();
});
window.addEventListener('load', refreshScoreList(API_URL));
