import React, { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import PropTypes from 'prop-types';

import './dropdown.scss';

const Dropdown = ({ children, header, positions = ['bottom'] }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={positions}
      padding={5}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={() => <>{children}</>}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)} className='dropdown__container'>
        {header}
      </div>
    </Popover>
  );
};

Dropdown.prototype = {
  children: PropTypes.element,
  header: PropTypes.element,
  positions: PropTypes.array,
};

export default Dropdown;
