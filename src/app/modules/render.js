import apiCall, { error, scoreList, inputs } from './utilities.js';


let count;
let bg;
let scoreElement;
let scores = [];

class Render {
  refresh () {
    return apiCall('GET','games/KxpWNQ8pM6wzQU9F1VhX/scores' ).then((response) => {
      return response.result
    }).catch(err => {
      error(err)
      return [];
    })
  }
  addScore(event) {
    event.preventDefault();
    const user = inputs[0].value;
    const score = inputs[1].value;
    const newScore = {user, score};
    inputs[0].value = '';
    inputs[1].value = '';
    
    apiCall('POST', 'games/KxpWNQ8pM6wzQU9F1VhX/scores', newScore).then( response => {
      window.alert(response.result)
    }).catch(err => error(err))

  }
  createGame () {
    const gameName = {name: 'Ping Pong'};
    apiCall('POST','games/', gameName ).then((response) => {
      console.log(response)
    }).catch(err => error(err))
  }
  async reloadHTML () {
    scores = await this.refresh() ;
    scoreList.innerHTML = '';
    scores.forEach((data, i) => {
      const {user, score} = data
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