import React from 'react';
import { Switch, Route } from 'react-router';

import About from './about';
import Work from './work';
import NotFound from './not_found';
import Main from './main';
import Portfolio from './portfolio';
import Education from './education';
import Skills from './skills';
import '../styles/routes.css';

const Routes = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/work' component={Work}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      <Route exact path='/education' component={Education}/>
      <Route exact path='/skills' component={Skills}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
)

export default Routes;
