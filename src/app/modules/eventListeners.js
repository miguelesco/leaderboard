import { form, refreshBtn } from "./utilities";
import Render from './render.js'


export const listeners = () => {
  const render = new Render();
  const active = false;
  if (!active) {
    form.addEventListener('submit', (event) => render.addScore(event));
    refreshBtn.addEventListener('click', () => render.reloadHTML())
  }
}