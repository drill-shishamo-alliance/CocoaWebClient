import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import DashBoard from '../DashBoard/DashBoard';
import LoginScreen from '../LoginScreen/LoginScreen';
import { useSelector } from 'react-redux';
import RootState from 'src/states';

const App: React.FC = () => {
  const history = useHistory();
  const isLoggedIn = useSelector<RootState, RootState['UserState']['isLoggedIn']>(
    state => state.UserState.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/app');
    } else {
      history.push('/login');
    }
  }, [isLoggedIn]);

  return (
    <Switch>
      <Route path='/app' component={DashBoard} />
      <Route path='/login' component={LoginScreen} />
    </Switch>
  );
};

export default App;
