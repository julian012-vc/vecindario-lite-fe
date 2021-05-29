import React from 'react'

import PropTypes from 'prop-types';
import styled from 'styled-components';

import './button.scss'

const Button = ({ text, background, onHoverColor }) => {

    const ButtonWithHover = styled.button`
        background-color: ${background};
        :hover {
            background-color: ${onHoverColor}
        }

    `

    return (
        <ButtonWithHover className="button__container">
            { text }
        </ButtonWithHover>
    )
}

Button.prototype = {
    text: PropTypes.string,
    background: PropTypes.string,
    onHoverColor: PropTypes.string
}

export default Button