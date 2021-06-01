import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import Input from 'react-phone-number-input';
import { useSelector } from 'react-redux';
import { selectSignUpErrors } from '../../redux/selectors/auth.selector';
import './phoneInput.scss';

const PhoneInput = ({ register, placeholder, formValue }) => {
  const [value, setValue] = useState();
  const error = useSelector(selectSignUpErrors);

  return (
    <div className='phone-input__conatiner'>
      <Input
        {...register(formValue)}
        country='CO'
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
      <div className='custom-input__container--error'>{error[formValue]}</div>
    </div>
  );
};

export default PhoneInput;
