import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import './phoneInput.scss';

const PhoneInput = ({ register, placeholder, formValue, errorSelector }) => {
  const [value, setValue] = useState();

  return (
    <div className='phone-input__container'>
      <Input
        {...register(formValue)}
        international
        countryCallingCodeEditable={false}
        defaultCountry='CO'
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
      <div className='phone-input__container--error'>{errorSelector[formValue]}</div>
    </div>
  );
};

PhoneInput.prototype = {
  register: PropTypes.any,
  errorSelector: PropTypes.any,
  placeholder: PropTypes.string,
  formValue: PropTypes.string,
};

export default PhoneInput;
