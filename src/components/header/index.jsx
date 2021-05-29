import React, { useState } from 'react'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import BoxAuth from './components/box-auth/boxAuth'
import CardUser from './components/card-user/cardUser'
import Dropdown from '../dropdown/dropdown'
import SearchInput from '../search-input'

import { getValueFromLocalStorage } from '../../helpers'
import { AUTH_TOKEN, LOGO_URL, SEACH_ICON, SEARCH_PROJECT_PLACEHOLDER } from '../../constants'
import './index.scss'
import UnloggedDropdown from './components/unlogged-dropdown/unloggedDropdown'

const Header = () => {

    const [isHeaderCollapse, setIsHeaderCollaspse] = useState(false)
    const hasAuthToken = !!getValueFromLocalStorage(AUTH_TOKEN)

    const isTabletOrMobile = useMediaQuery({ maxWidth: 991, minWidth: 768 })
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const setHeaderHeight = () => (isHeaderCollapse && (isTabletOrMobile || isMobile)) ? '430px' : '65px'
    const isDisplayAuthMenu = () => (isHeaderCollapse && (isTabletOrMobile || isMobile)) ? 'block': 'none'

    const HeaderContainer = styled.div`
        height: ${setHeaderHeight};
    `

    const AuthMenu = styled.div`
        display: ${isDisplayAuthMenu}
    `
    

    return (
        <HeaderContainer className="header__container">
            <div className="header__container--wrapper">
                <div className="logo__container">
                    <img src={LOGO_URL} alt="logo" className="logo__container--img"/>
                </div>
                <div className="input__container">
                   <SearchInput
                        iconRight={SEACH_ICON}
                        placeholder={SEARCH_PROJECT_PLACEHOLDER}
                    />
                </div>
                <div className="dropdown__container">
                    {
                        hasAuthToken ?
                        <>
                            <div className="dropdown__container--logged">
                                <Dropdown header={<CardUser/>}>
                                    <div>Buena</div>
                                </Dropdown> 
                            </div>
                            <div className="dropdown__container--logged-collapse">
                                <Dropdown header={<i className="fal fa-bars bars"/>}>
                                    <div>Buena</div>
                                </Dropdown>
                            </div>
                        </> :
                        <>
                            <div className="dropdown__container--unlogged">
                                <BoxAuth/>
                            </div>
                            <div className="dropdown__container--unlogged-collapse">
                                    <i className="fal fa-bars bars" onClick={() => setIsHeaderCollaspse(!isHeaderCollapse) }/>
                            </div>
                        </>
                    }
                </div>
            </div>
            <AuthMenu className="header__container--unlogged">
                <UnloggedDropdown/>
            </AuthMenu>
        </HeaderContainer>
    )
}

export default Header;