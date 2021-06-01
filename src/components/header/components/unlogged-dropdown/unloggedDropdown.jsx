import React from 'react'
import{ SEARCH_PROJECT_PLACEHOLDER, UNLOGGED_PRICTURE_URL } from '../../../../constants'
import * as Icons from '../../../../constants/icons';

import SearchInput from '../../../search-input'
import BoxAuth from '../box-auth/boxAuth'

import './unloggedDropdown.scss'

const UnloggedDropdown = () => {
    return (
        <div className="unlogged-dropdown__container">
            <div className="unlogged-dropdown__container--header">
                <div className="container--header__picture">
                    <img src={UNLOGGED_PRICTURE_URL} alt="Foto perfil"/>
                </div>
                <div className="container--header__body">
                    <div className="container--header__body--title">
                        Bienvenido
                    </div>
                    <div className="container--header__body--subtitle">
                        Crea una cuenta completamente gratis o inicia sesión para descubrir cuales proyectos puedes pagar.
                    </div>
                </div>
            </div>
            <div className="unlogged-dropdown__container--btns">
                <BoxAuth/>
            </div>
            <div className="unlogged-dropdown__container--search">
                <SearchInput
                    iconRight={Icons.SEACH_ICON}
                    placeholder={SEARCH_PROJECT_PLACEHOLDER}
                />
            </div>
        </div>
    )
}

export default UnloggedDropdown