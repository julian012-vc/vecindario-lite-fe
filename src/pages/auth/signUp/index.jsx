import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from '../../../components/input/input';
import PhoneInput from '../../../components/phone-input/phoneInput';
import Button from '../../../components/button/button';

import {
  cleanSignUp,
  signUp,
  signUpSuccess,
  signUpWithErrors,
} from '../../../redux/slices/auth/sign-up.slice';
import { selectSingUpIsLoading, selectSignUpErrors } from '../../../redux/selectors/auth.selector';

import { isValidForm, mappingError, validateForm } from '../../../helpers/form-validation';
import { SIGN_UP_VALIDATION } from '../../../helpers/validations/user.validation';

import * as Icons from '../../../constants/icons';
import * as Colors from '../../../constants/colors';
import { AUTH_TOKEN, SING_UP_PICTURE_URL } from '../../../constants';
import { HOME_ROUTE, SIGN_IN_ROUTE } from '../../../constants/routes';

import { saveInLocalStorage } from '../../../helpers';

import { createAccount } from '../../../services/auth.service';

import './index.scss';

const SingUp = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectSingUpIsLoading);
  const errorSelector = useSelector(selectSignUpErrors);

  const onSubmit = async data => {
    console.log(data);
    dispatch(signUp(data));
    if (await isValidForm(data, SIGN_UP_VALIDATION)) {
      createAccount(data)
        .then(res => {
          saveInLocalStorage(AUTH_TOKEN, res.token);
          dispatch(signUpSuccess());
          window.location.reload(false);
        })
        .catch(err => {
          dispatch(signUpWithErrors(err.errors));
        });
    } else {
      validateForm(data, SIGN_UP_VALIDATION).catch(err => {
        dispatch(signUpWithErrors(mappingError(err)));
      });
    }
  };

  const redirect = path => {
    dispatch(cleanSignUp());
    history.push(path);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='sing-up__container'>
        <div className='sing-up__wrapper'>
          <div className='sing-up__wrapper--header'>
            <div className='sing-up__wrapper--header--logo'>
              <img src={SING_UP_PICTURE_URL} alt='Logo' />
            </div>
            <div className='sing-up__wrapper--header--title'>
              <h1>Crea un diagnóstico totalmente gratis</h1>
            </div>
            <div className='sing-up__wrapper--header--message'>
              <h2>
                Aquí tener casa propia sí es posible; completa tu diagnóstico y descubre que
                proyectos puedes pagar.
              </h2>
            </div>
          </div>

          <div className='sing-up__wrapper--body'>
            <div className='sing-up__container--body--form'>
              <Input
                placeholder='Nombres'
                icon={Icons.USER_ICON}
                register={register}
                formValue='first_name'
                errorSelector={errorSelector}
              />
              <Input
                placeholder='Apellidos'
                icon={Icons.USER_ICON}
                register={register}
                formValue='last_name'
                errorSelector={errorSelector}
              />
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
              <Input
                placeholder='Confirmar contraseña'
                icon={Icons.EYE_ICON}
                isPassword={true}
                register={register}
                formValue='password_confirmation'
                errorSelector={errorSelector}
              />
              <PhoneInput
                register={register}
                placeholder='Número de telefono'
                formValue='phone'
                errorSelector={errorSelector}
              />
            </div>
          </div>

          <div className='sing-up__wrapper--footer'>
            <Button
              background={Colors.YELLOW_PRIMARY}
              onHoverColor={Colors.YELLOW_SECONDARY}
              text='Ser parte'
              type='submit'
              isLoading={isLoading}
            />

            <div className='sing-up__wrapper--footer--divider'>
              <div className='line-divider' />
              <div className='letter-divider'> O </div>
              <div className='line-divider' />
            </div>

            <div className='sing-up__wrapper--footer--comeback'>
              ¿Ya tienes cuenta?
              <label className='link__sing-in' onClick={() => redirect(SIGN_IN_ROUTE)}>
                Ingresa
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

export default SingUp;
