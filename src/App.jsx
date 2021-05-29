import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import * as Routes from './constants/routes'
import './App.css';
import Dashboard from './pages/dashboard';
import SingIn from './pages/auth/signIn';
import SingUp from './pages/auth/signUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={Routes.HOME_ROUTE}>
            <Dashboard/>
          </Route>
          <Route exact path={Routes.AUTH_ROUTE}>
            <Redirect to={Routes.SIGN_IN_ROUTE}/>
          </Route>
          <Route exact path={Routes.SIGN_IN_ROUTE}> 
            <SingIn/>
          </Route>
          <Route exact path={Routes.SIGN_UP_ROUTE}>
            <SingUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
