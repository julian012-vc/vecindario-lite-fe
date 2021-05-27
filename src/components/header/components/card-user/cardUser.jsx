import React from 'react'
import { USER_PICTURE_URL } from '../../../../constants'
import PropTypes from 'prop-types';

import './cardUser.scss'

const CardUser = ({ name }) => {
    return (
        <div className="card-user__container">
            <img className="card-user__container--logo" src={USER_PICTURE_URL} alt="logo"/>
            <div className="card-user__container--name">Julian Camillo</div>
            <i className="far fa-chevron-down card-user__container--icon"/>
        </div>
    )
}

CardUser.prototype = {
    name: PropTypes.string
}

export default CardUser