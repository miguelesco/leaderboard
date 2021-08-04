import create from './createGame.js';
import { scoreChildren, scoreList } from './utilities.js';

class Render {
  createGame () {
    create()
  }
  reloadHTML = () => {
    scoreList.innerHTML = '';
    scoreChildren.forEach((score, i) => {
      const count = i + 1;
      const bg = count % 2 ? 'white-bg' : 'gray-bg';
      const scoreElement = `
            <li class="${bg}" >
              ${score.textContent}
            </li>`;
      scoreList.innerHTML += scoreElement;
    });
  }
}

export default Render;