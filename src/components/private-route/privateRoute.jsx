import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/selectors/user.selector';

const PrivateRoute = ({ children, redirect, path, needLogged = false, ...rest }) => {
  const user = useSelector(selectUser);
  const validation = needLogged ? !!user : !user;
  return (
    <Route exact path={path} {...rest}>
      {validation ? children : <Redirect to={redirect} />}
    </Route>
  );
};

PrivateRoute.prototype = {
  children: PropTypes.element,
  redirect: PropTypes.string,
  path: PropTypes.bool,
  needLogged: PropTypes.bool,
};

export default PrivateRoute;
