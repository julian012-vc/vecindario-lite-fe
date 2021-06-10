import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

import {
  cleanSignIn,
  signIn,
  signInSuccess,
  signInWithErrors,
} from '../../../redux/slices/auth/sign-in.slice';
import { selectSingInIsLoading, selectSignInErrors } from '../../../redux/selectors/auth.selector';

import { isValidForm, mappingError, validateForm } from '../../../helpers/form-validation';
import { SIGN_IN_VALIDATION } from '../../../helpers/validations/user.validation';
import * as Icons from '../../../constants/icons';
import * as Colors from '../../../constants/colors';
import { AUTH_TOKEN, SING_IN_PICTURE_URL } from '../../../constants';
import { HOME_ROUTE, SIGN_UP_ROUTE } from '../../../constants/routes';
import './index.scss';
import { logIn } from '../../../services/user.service';
import { saveInLocalStorage } from '../../../helpers';

const SingIn = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectSingInIsLoading);
  const errorSelector = useSelector(selectSignInErrors);

  const onSubmit = async data => {
    dispatch(signIn(data));
    if (await isValidForm(data, SIGN_IN_VALIDATION)) {
      logIn(data)
        .then(res => {
          saveInLocalStorage(AUTH_TOKEN, res.token);
          dispatch(signInSuccess());
          window.location.reload(false);
        })
        .catch(err => {
          dispatch(signInWithErrors(err.error));
        });
    } else {
      validateForm(data, SIGN_IN_VALIDATION).catch(err => {
        dispatch(signInWithErrors(mappingError(err)));
      });
    }
  };

  const redirect = path => {
    dispatch(cleanSignIn());
    history.push(path);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='sing-in__container'>
        <div className='sing-in__wrapper'>
          <div className='sing-in__wrapper--header'>
            <div className='sing-in__wrapper--header--logo'>
              <img src={SING_IN_PICTURE_URL} alt='Logo' />
            </div>
            <div className='sing-in__wrapper--header--title'>
              <h1>Bienvenido a Vecindario</h1>
            </div>
            <div className='sing-in__wrapper--header--message'>
              <h2>
                Aqui tener casa propia sí es posible. Para poderte brindar una mejor asesoría inicia
                sesión.
              </h2>
            </div>
          </div>

          <div className='sing-in__wrapper--body'>
            <div className='sing-in__container--body--form'>
              <Input
                placeholder='E-mail'
                icon={Icons.EMAIL_ICON}
                register={register}
                formValue='email'
                errorSelector={errorSelector}
              />
              <Input
                placeholder='Contraseña'
                icon={Icons.EYE_ICON}
                isPassword={true}
                register={register}
                formValue='password'
                errorSelector={errorSelector}
              />
            </div>
          </div>

          <div className='sing-in__wrapper--footer'>
            <Button
              background={Colors.YELLOW_PRIMARY}
              onHoverColor={Colors.YELLOW_SECONDARY}
              text='Ingresar'
              type='submit'
              isLoading={isLoading}
            />

            <div className='sing-in__wrapper--footer--divider'>
              <div className='line-divider' />
              <div className='letter-divider'> O </div>
              <div className='line-divider' />
            </div>

            <div className='sing-up__wrapper--footer--comeback'>
              ¿No tienes cuenta?
              <label className='link__sing-in' onClick={() => redirect(SIGN_UP_ROUTE)}>
                Regístrate
              </label>
              <label className='link__home' onClick={() => redirect(HOME_ROUTE)}>
                Volver
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SingIn;
