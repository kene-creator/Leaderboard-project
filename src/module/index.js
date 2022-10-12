import '../styles/style.css';
import { refreshScoreList, addScore } from './helper';
import { API_URL } from './config';

const refreshBtn = document.querySelector('.refresh-btn');
const form = document.querySelector('form');

refreshBtn.addEventListener('click', () => {
  refreshScoreList(API_URL);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e);
  form.reset();
});
windows.addEventListener('load', refreshScoreList);
