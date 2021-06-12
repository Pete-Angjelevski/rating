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
      <h1>Restaurants</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Price Range</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map(({id, name, location, price_range}) => {
            return (
              <tr key={id}>  
                <td>
                  <Link to={`/${id}`}>
                    {name}
                  </Link>
                  
                </td>
                <td>{location}</td>
                <td>{price_range}</td>
              </tr> 
            )
          })}
        </tbody>
      </table>
    </div>)
}

export default RestaurantList