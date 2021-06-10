import React from 'react';

import './searchInput.scss';

const SearchInput = () => {
  return (
    <div className='search-field-input__container'>
      <input className='input' type='text' placeholder='Buscar' />
    </div>
  );
};

export default SearchInput;
