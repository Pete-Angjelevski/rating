import request from 'superagent'


export function getRestaurants () {

  return request.get('http://localhost:4000/api/v1/restaurants')
    .then(res => res.body)
    .catch(err => console.log(err))
}