import React from 'react';
import './App.css';
import Nav from './component/nav';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import HomeView from './view/homeview';
import AboutView from './view/aboutview';
import View404 from './view/404view';
import JoinView from './view/joinview';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Switch>
        <Route 
          path={['/','/home']}
          exact
          component={HomeView}
        />
        <Route 
          path='/about'
          exact
          component={AboutView}
        />
        <Route 
          path='/join'
          exact
          component={JoinView}
        />
        <Route 
          component={View404}
        />
      </Switch>
    </div>
  );
}

export default App;
