export const scoreList = document.querySelector('.score-list');
export const scoreChildren = Array.from(scoreList.children);

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

export default async function apiCall(method = '', body = {}, urlExtension = '') {
  const response = await fetch(baseURL+urlExtension, {
    method: !method ? 'GET' : method,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  return response;
}

export const error = (message = '') => {
  const error = `An error has ocurred ${message}`
  throw new Error(error)
}