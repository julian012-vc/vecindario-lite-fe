import React from 'react';
import Footer from '../footer';
import Header from '../header';

import './index.scss';

const Container = ({ children }) => {
  return (
    <div className='container__wrapper'>
      <div className='container__wrapper--header'>
        <Header />
      </div>
      <div className='container__wrapper--body'>{children}</div>
      <div className='container__wrapper--footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Container;
