import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import BoxAuth from './components/box-auth/boxAuth';
import CardUser from './components/card-user/cardUser';
import Dropdown from '../dropdown/dropdown';
import SearchInput from '../search-input';

import { getValueFromLocalStorage } from '../../helpers';
import { AUTH_TOKEN, LOGO_URL, SEARCH_PROJECT_PLACEHOLDER } from '../../constants';
import * as Icons from '../../constants/icons';
import './index.scss';
import UnloggedDropdown from './components/unlogged-dropdown/unloggedDropdown';

const HeaderContainer = styled.div`
  height: ${props => props.headerHeight};
`;

const AuthMenu = styled.div`
  display: ${props => props.displayAuthMenu};
`;

const Header = () => {
  const [isHeaderCollapse, setIsHeaderCollaspse] = useState(false);
  const hasAuthToken = !!getValueFromLocalStorage(AUTH_TOKEN);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 991, minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const setHeaderHeight = () =>
    isHeaderCollapse && (isTabletOrMobile || isMobile) ? '430px' : '65px';
  const isDisplayAuthMenu = () =>
    isHeaderCollapse && (isTabletOrMobile || isMobile) ? 'block' : 'none';

  return (
    <HeaderContainer headerHeight={setHeaderHeight} className='header__container'>
      <div className='header__container--wrapper'>
        <div className='logo__container'>
          <img src={LOGO_URL} alt='logo' className='logo__container--img' />
        </div>
        <div className='input__container'>
          <SearchInput iconRight={Icons.SEACH_ICON} placeholder={SEARCH_PROJECT_PLACEHOLDER} />
        </div>
        <div className='dropdown__container'>
          {hasAuthToken ? (
            <>
              <div className='dropdown__container--logged'>
                <Dropdown header={<CardUser />}>
                  <div>Buena</div>
                </Dropdown>
              </div>
              <div className='dropdown__container--logged-collapse'>
                <Dropdown header={<i className='fal fa-bars bars' />}>
                  <div>Buena</div>
                </Dropdown>
              </div>
            </>
          ) : (
            <>
              <div className='dropdown__container--unlogged'>
                <BoxAuth />
              </div>
              <div className='dropdown__container--unlogged-collapse'>
                <i
                  className='fal fa-bars bars'
                  onClick={() => setIsHeaderCollaspse(!isHeaderCollapse)}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <AuthMenu displayAuthMenu={isDisplayAuthMenu} className='header__container--unlogged'>
        <UnloggedDropdown />
      </AuthMenu>
    </HeaderContainer>
  );
};

export default Header;
