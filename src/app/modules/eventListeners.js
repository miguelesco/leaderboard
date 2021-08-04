import { form, refreshBtn } from './utilities.js';
import Render from './render.js';

const listeners = () => {
  const render = new Render();
  const active = false;
  if (!active) {
    form.addEventListener('submit', (event) => render.addScore(event));
    refreshBtn.addEventListener('click', () => render.reloadHTML());
  }
};

export default listeners;