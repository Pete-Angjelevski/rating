import React from 'react'
import {Route, Switch} from 'react-router-dom'


// COMPONENTS
import RestaurantList from './components/RestaurantList'
import Restaurant from './components/Restaurant'

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={RestaurantList}/>
      <Route path={`/:id`} component={Restaurant} />
    </Switch>

    </>
    
  )
}

export default App;
