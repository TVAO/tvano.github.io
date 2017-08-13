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

/*
  The Object.assign() method is used to copy property values to a new Object
  This results in a route component with properties.
 */
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

/* Create routes to components with additional properties
   The ...rest spread syntax supports multiple properties
   NB: routes do not support passing of props by default
*/
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const Routes = ({props}) => (
  <main className="content">
    <Switch>
      <PropsRoute exact path='/' component={Main} props={props}/>
      <PropsRoute exact path='/about' component={About} props={props}/>
      <PropsRoute exact path='/work' component={Work} props={props}/>
      <PropsRoute exact path='/portfolio' component={Portfolio} props={props}/>
      <PropsRoute exact path='/education' component={Education} props={props}/>
      <PropsRoute exact path='/skills' component={Skills} props={props}/>
      <PropsRoute component={NotFound}/>
    </Switch>
  </main>
)

export default Routes;
