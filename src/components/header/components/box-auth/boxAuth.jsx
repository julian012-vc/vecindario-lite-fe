import React from 'react'
import Button from '../../../button/button'

import * as Colors from '../../../../constants/colors'
import './boxAuth.scss'

const BoxAuth = () => {

    return (
        <div className="box-auth__container">
            <Button background={Colors.YELLOW_PRIMARY} onHoverColor={Colors.YELLOW_SECONDARY} text="Crear cuenta"/>
            <Button background={Colors.WHITE} onHoverColor={Colors.YELLOW_PRIMARY} text="Ingresar"/>
        </div>
    )
}

export default BoxAuth