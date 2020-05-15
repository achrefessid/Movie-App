import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom'  
import Parent from './components/Parent'
import Navbar from './components/Navbar/Navbar'
import Account from './components/Account/Account'
import Favorite from './components/Favorite/Favorite'

function App() {
  return (
    <Switch>
    <BrowserRouter>
    <Navbar />
    <Account />
    <Route   path='/' component={Parent} />
    <Route   exact path='/favorite' component={Favorite} />
    </BrowserRouter>
    </Switch>
  );
}

export default App; 

