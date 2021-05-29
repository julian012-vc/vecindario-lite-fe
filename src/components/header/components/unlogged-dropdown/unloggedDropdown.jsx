import React from 'react'
import { SEACH_ICON, SEARCH_PROJECT_PLACEHOLDER, UNLOGGED_PRICTURE_URL } from '../../../../constants'
import SearchInput from '../../../search-input'
import BoxAuth from '../box-auth/boxAuth'

import './unloggedDropdown.scss'

const UnloggedDropdown = () => {
    return (
        <div className="unlogged-dropdown__container">
            <div className="unlogged-dropdown__container--header">
                <div className="container--header__picture">
                    <img src={UNLOGGED_PRICTURE_URL}/>
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
                    iconRight={SEACH_ICON}
                    placeholder={SEARCH_PROJECT_PLACEHOLDER}
                />
            </div>
        </div>
    )
}

export default UnloggedDropdown