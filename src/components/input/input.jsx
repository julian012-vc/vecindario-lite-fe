import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { EYE_SLASH_ICON } from '../../constants/icons';
import './input.scss';

const PASSWORD_TYPE = 'password';
const TEXT_TYPE = 'text';

const Input = ({ placeholder, icon, isPassword = false, formValue, register, errorSelector }) => {
  const [showPassword, setShowPassword] = useState(isPassword);

  return (
    <div className='custom-input__container'>
      <p className='control has-icons-right'>
        <input
          {...register(formValue)}
          className='input is-rounded'
          type={showPassword ? PASSWORD_TYPE : TEXT_TYPE}
          placeholder={placeholder}
        />
        <span className='icon is-small is-right'>
          <i
            className={isPassword && showPassword ? EYE_SLASH_ICON : icon}
            onClick={() => isPassword && setShowPassword(!showPassword)}
          />
        </span>
      </p>
      <div className='custom-input__container--error'>{errorSelector[formValue]}</div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  isPassword: PropTypes.bool,
  formValue: PropTypes.string,
  register: PropTypes.any,
  errorSelector: PropTypes.any,
};

export default Input;
