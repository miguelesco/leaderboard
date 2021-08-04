import apiCall, { error } from "./utilities"

export default createGame = () => {
  const gameName = {name: 'miguelTest'};
  apiCall('POST', gameName, 'games/').then((response) => {
    console.log(response)
  }).catch(err => error(err))
}