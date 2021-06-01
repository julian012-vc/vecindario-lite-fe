import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/input/input';

import './index.scss';
import * as Icons from '../../../constants/icons';
import { SING_UP_PICTURE_URL } from '../../../constants';
import * as Colors from '../../../constants/colors';
import Button from '../../../components/button/button';
import { isValidForm, mappingError, validateForm } from '../../../helpers/form-validation';
import { SING_UP_VALIDATION } from '../../../helpers/validations/user.validation';
import { signUp, signUpSuccess, signUpWithErrors } from '../../../redux/slices/auth/sign-up.slice';
import { selectSingUpIsLoading } from '../../../redux/selectors/auth.selector';
import PhoneInput from '../../../components/phone-input/phoneInput';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, SIGN_IN_ROUTE } from '../../../constants/routes';

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectSingUpIsLoading);

  const onSubmit = async data => {
    dispatch(signUp(data));
    console.log(data);
    if (await isValidForm(data, SING_UP_VALIDATION)) {
      // TODO MAKE REQUEST WITH SERVICE
      dispatch(signUpSuccess());
    } else {
      validateForm(data, SING_UP_VALIDATION).catch(err => {
        dispatch(signUpWithErrors(mappingError(err)));
      });
    }
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
              />
              <Input
                placeholder='Apellidos'
                icon={Icons.USER_ICON}
                register={register}
                formValue='last_name'
              />
              <Input
                placeholder='E-mail'
                icon={Icons.EMAIL_ICON}
                register={register}
                formValue='email'
              />
              <Input
                placeholder='Contraseña'
                icon={Icons.EYE_ICON}
                isPassword={true}
                register={register}
                formValue='password'
              />
              <Input
                placeholder='Confirmar contraseña'
                icon={Icons.EYE_ICON}
                isPassword={true}
                register={register}
                formValue='password_confirmation'
              />
              <PhoneInput register={register} placeholder='Número de telefono' formValue='phone' />
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
              <Link className='link__sing-in' to={SIGN_IN_ROUTE}>
                Ingresa
              </Link>
              <Link className='link__home' to={HOME_ROUTE}>
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SingUp;
