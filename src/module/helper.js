import { API_URL } from './config';

export const refreshScoreList = async function (url) {
  try {
    const scoresContainer = document.querySelector('.score-items');
    scoresContainer.innerHTML =
      '<li class="score-list fw-600"><span>#</span><span>Name</span><span>Score</span></li>';
    const res = await fetch(url);

    const data = await res.json();
    console.log(data);

    data.result.forEach((score, i) => {
      scoresContainer.innerHTML += `
      
        <li class="score-list ${i % 2 === 0 ? 'bg-gray' : ''}"><span>${
        i + 1
      }</span><span>${score.user} :</span><span>${score.score}</span></li>
        `;
    });

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const addScore = async (e) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Leaderboard Game',
      user: `${e.target.name.value}`,
      score: `${e.target.score.value}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};
