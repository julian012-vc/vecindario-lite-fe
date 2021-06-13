import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectWordFilter } from '../../redux/selectors/project.selector';
import { setWordFilter } from '../../redux/slices/project.slice';

import './index.scss';

const SearchInput = ({ iconLeft, iconRight, placeholder }) => {
  const wordFilter = useSelector(selectWordFilter);
  const dispatch = useDispatch();

  const hasIconLeft = iconLeft != null ? 'has-icons-left' : '';
  const hasIconRight = iconRight != null ? 'has-icons-right' : '';

  const updateWordFilter = value => dispatch(setWordFilter(value));

  return (
    <div className={`control ${hasIconLeft} ${hasIconRight} search-input__container`}>
      <input
        className='input'
        type='text'
        placeholder={placeholder}
        value={wordFilter || ''}
        onChange={event => updateWordFilter(event.target.value)}
      />
      {iconLeft && (
        <span className='icon is-small is-left'>
          <i className={iconLeft} />
        </span>
      )}
      {iconRight && (
        <span className='icon is-small is-right'>
          <i className={iconRight} />
        </span>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SearchInput;
