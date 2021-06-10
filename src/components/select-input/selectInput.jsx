import React from 'react';

import './selectInput.scss';

const SelectInput = ({
  options,
  register,
  placeholder,
  icon,
  formValue,
  errorSelector,
  defaultValue = null,
  value = null,
}) => {
  return (
    <div className='select-input__container control has-icons-left'>
      <div className='select is-rounded is-normal'>
        <select
          {...register(formValue, { value: !!value ? value[formValue] : defaultValue })}
          defaultValue={defaultValue}
        >
          <option value={defaultValue}>{placeholder}</option>
          {options.map(opt => (
            <option value={opt.value} key={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <div className='icon is-small is-left'>
        <i className={icon} />
      </div>
      <div className='select-input__container--error'>{errorSelector[formValue]}</div>
    </div>
  );
};

export default SelectInput;
