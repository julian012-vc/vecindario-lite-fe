import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Dashboard from './pages/dashboard';
import SingIn from './pages/auth/signIn';
import SingUp from './pages/auth/signUp';

import { isLogged } from './services/auth.service';

import { setUser } from './redux/slices/user.slice';

import * as Routes from './constants/routes';
import './App.css';
import PrivateRoute from './components/private-route/privateRoute';
import Projects from './pages/projects';
import ProjectLeads from './pages/project-leads';
import { getValueFromLocalStorage, removeValueFromLocalStorage } from './helpers';
import { AUTH_TOKEN } from './constants';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getValueFromLocalStorage(AUTH_TOKEN);
    if (token) {
      isLogged()
        .then(res => {
          dispatch(setUser(res));
          setIsLoading(false);
        })
        .catch(() => {
          removeValueFromLocalStorage(AUTH_TOKEN);
          window.location.reload(false);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [dispatch]);

  return (
    <div className='App'>
      <Router>
        {!isLoading && (
          <Switch>
            <Route exact path={Routes.HOME_ROUTE}>
              <Dashboard />
            </Route>
            <Route exact path={Routes.AUTH_ROUTE}>
              <Redirect to={Routes.SIGN_IN_ROUTE} />
            </Route>
            <PrivateRoute redirect={Routes.HOME_ROUTE} path={Routes.SIGN_IN_ROUTE}>
              <SingIn />
            </PrivateRoute>
            <PrivateRoute redirect={Routes.HOME_ROUTE} path={Routes.SIGN_UP_ROUTE}>
              <SingUp />
            </PrivateRoute>
            <PrivateRoute
              redirect={Routes.HOME_ROUTE}
              path={Routes.PROJECT_REPORT_ROUTE}
              needLogged={true}
            >
              <ProjectLeads />
            </PrivateRoute>
            <PrivateRoute
              redirect={Routes.HOME_ROUTE}
              path={Routes.MY_PROJECTS_ROUTE}
              needLogged={true}
            >
              <Projects />
            </PrivateRoute>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
