import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../button/button';

import { AUTH_ROUTE, SIGN_UP_ROUTE } from '../../../../constants/routes';
import * as Colors from '../../../../constants/colors';
import './boxAuth.scss';

const BoxAuth = () => {
  return (
    <div className='box-auth__container'>
      <Link to={SIGN_UP_ROUTE}>
        <Button
          background={Colors.YELLOW_PRIMARY}
          onHoverColor={Colors.YELLOW_SECONDARY}
          text='Crear cuenta'
        />
      </Link>
      <Link to={AUTH_ROUTE}>
        <Button background={Colors.WHITE} onHoverColor={Colors.YELLOW_PRIMARY} text='Ingresar' />
      </Link>
    </div>
  );
};

export default BoxAuth;
