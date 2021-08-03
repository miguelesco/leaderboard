import { scoreChildren, scoreList } from './utilities.js';

class Render {
  reloadHTML() {
    scoreList.innerHTML = '';
    scoreChildren.forEach((score, i) => {
      this.count = i + 1;
      this.bg = this.count % 2 ? 'white-bg' : 'gray-bg';
      this.scoreElement = `
            <li class="${this.bg}" >
              ${score.textContent}
            </li>`;
      scoreList.innerHTML += this.scoreElement;
    });
  }
}

export default Render;