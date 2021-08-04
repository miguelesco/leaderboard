import './main.scss';
import Render from './app/modules/render.js';
import { listeners } from './app/modules/eventListeners';

const init = () => {
  const render = new Render();
  render.reloadHTML();
  listeners()
  // render.createGame();
  render.refresh();
};

init();