import React from 'react';

import './searchInput.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectWordFilter } from '../../../../redux/selectors/admin.selector';
import { setWordFilter } from '../../../../redux/slices/admin.slice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const wordFilter = useSelector(selectWordFilter);

  const updateWordFilter = value => dispatch(setWordFilter(value));

  return (
    <div className='search-field-input__container'>
      <input
        className='input'
        type='text'
        placeholder='Buscar'
        value={wordFilter || ''}
        onChange={event => updateWordFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
