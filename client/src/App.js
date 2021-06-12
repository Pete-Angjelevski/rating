import React from 'react'
import {Route} from 'react-router-dom'


// COMPONENTS
import RestaurantList from './components/RestaurantList'


function App() {
  return (
    <>
      <Route path='/' component={RestaurantList}/>
      

    </>
    
  )
}

export default App;
