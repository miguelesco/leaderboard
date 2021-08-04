export const scoreList = document.querySelector('.score-list');
export const scoreChildren = Array.from(scoreList.children);
export const refreshBtn = document.querySelector('.refresh-btn');
export const form = document.getElementsByTagName('form')[0]
export const inputs = document.getElementsByTagName('input');
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

export default async function apiCall(method = '', urlExtension = '', body) {
  const response = await fetch(baseURL + urlExtension, {
    method: !method ? 'GET' : method,
    body: JSON.stringify(body) ,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return await response.json();
}

export const error = (message = '') => {
  const error = `An error has ocurred ${message}`
  throw new Error(error)
}