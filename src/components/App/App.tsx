import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import LoginScreen from '../LoginScreen/LoginScreen';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route exact path='/login' component={LoginScreen} />
      </Switch>
    </div>
  );
};

export default App;
