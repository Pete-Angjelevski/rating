import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


// API 
import { getRestaurants } from '../API/restaurantsAPI'

const RestaurantList = () => {
  const [ restaurants, setRestaurant ] = useState([])

  useEffect(() => {
    getRestaurants()
      .then(res => setRestaurant(res))
      .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <h1>YELP CLONE</h1>
      <ul>
        {restaurants.map(({id, name, location, price_range}) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>Location: {location}</p>
              <p>Price Range: {price_range}</p>
            </li>)
        })}
      </ul>
    </div>)
}

export default RestaurantList