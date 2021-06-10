import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';

import './inputNumber.scss';
import React from 'react';

const InputNumber = ({
  placeholder,
  icon,
  control,
  prefix,
  formValue,
  errorSelector,
  initialValue = null,
}) => {
  const setDefaultValue = () => (!!initialValue ? initialValue[formValue] : 0);

  return (
    <div className='input-number__wrapper'>
      <Controller
        render={({ field: { onChange } }) => {
          return (
            <p className='control has-icons-right'>
              <NumberFormat
                className='input-number__wrapper--input input is-rounded'
                placeholder={placeholder}
                thousandSeparator={true}
                prefix={prefix}
                onValueChange={v => {
                  onChange(v.value);
                }}
                defaultValue={!!initialValue ? initialValue[formValue] : ''}
              />
              <span className='icon is-small is-right'>
                <i className={icon} />
              </span>
            </p>
          );
        }}
        name={formValue}
        control={control}
        defaultValue={setDefaultValue}
      />
      <div className='input-number__wrapper--error'>{errorSelector[formValue]}</div>
    </div>
  );
};

export default InputNumber;
