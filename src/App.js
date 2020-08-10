import React from 'react';
import Pricing from './components/pages/pricing/pricing';
import Signup from './components/pages/signup/Signup';
import Discover from './components/pages/discover/discover';
import Home from './components/pages/home/home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/discover' component={Discover}/>
        <Route exact path='/pricing' component={Pricing}/>
        <Route exact path='/sign-up' component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
