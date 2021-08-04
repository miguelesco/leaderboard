import apiCall, { error, scoreList, inputs } from './utilities.js';

let count;
let bg;
let scoreElement;
let scores = [];
let gameId = 'KxpWNQ8pM6wzQU9F1VhX';

class Render {
  refresh = async () => {
    try {
      const response = await apiCall('GET', `games/${gameId}/scores`);
      return response.result;
    } catch (err) {
      error(err);
      return [];
    }
  }

  addScore = (event) => {
    event.preventDefault();
    const user = inputs[0].value;
    const score = inputs[1].value;
    const newScore = { user, score };
    inputs[0].value = '';
    inputs[1].value = '';

    apiCall('POST', `games/${gameId}/scores`, newScore).then((response) => {
      window.alert(response.result);
    }).catch((err) => error(err));
  }

  createGame = async () => {
    const gameName = { name: 'Ping Pong' };
    try {
      const response = await apiCall('POST', 'games/', gameName);
      gameId = response.result;
    } catch (err) {
      return error(err);
    }
  }

  async reloadHTML() {
    scores = await this.refresh();
    scoreList.innerHTML = '';
    scores.forEach((data, i) => {
      const { user, score } = data;
      count = i + 1;
      bg = count % 2 ? 'white-bg' : 'gray-bg';
      scoreElement = `
            <li class="${bg}" >
              ${user} : ${score}
            </li>`;
      scoreList.innerHTML += scoreElement;
    });
  }
}

export default Render;