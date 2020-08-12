import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pricing from './pages/pricing/pricing';
import Signup from './pages/signup/Signup';
import Discover from './pages/discover/discover';
import Home from './pages/home/home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/discover' component={Discover}/>
          <Route exact path='/pricing' component={Pricing}/>
          <Route exact path='/sign-up' component={Signup}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
