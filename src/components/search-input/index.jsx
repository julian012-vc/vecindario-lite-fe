import React from 'react';
import PropTypes from 'prop-types';

import './index.scss'

const SearchInput = ({ iconLeft, iconRight, placeholder }) => {

    const hasIconLeft = iconLeft != null ? 'has-icons-left' : ''
    const hasIconRight = iconRight != null ? 'has-icons-right' : ''

    return (
        <div className={`control ${hasIconLeft} ${hasIconRight} search-input__container`}>
            <input className="input" type="text" placeholder={placeholder}/>
            {
                iconLeft &&
                <span className="icon is-small is-left">
                    <i className={iconLeft}></i>
                </span>
            }
            {
                iconRight &&
                <span className="icon is-small is-right">
                    <i className={iconRight}></i>
                </span>
            }
        </div>
    )
}

SearchInput.propTypes = {
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string,
    placeholder: PropTypes.string
}

export default SearchInput;