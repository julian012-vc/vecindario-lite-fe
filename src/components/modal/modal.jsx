import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { selectModalCurrent } from '../../redux/selectors/modal.selector';
import { closeModal } from '../../redux/slices/modal.slice';
import './modal.scss';

const Modal = ({ children, id, onCloseAction = () => {} }) => {
  const dispatch = useDispatch();
  const current = useSelector(selectModalCurrent);
  const isActive = current === id;
  const closeModalAction = () => {
    dispatch(closeModal());
    onCloseAction();
  };

  return (
    <div className={`modal ${isActive ? 'is-active' : ''}`}>
      <div className='modal-background' onClick={closeModalAction} />
      <div className='modal-content'>{children}</div>
      <button className='modal-close is-large' aria-label='close' onClick={closeModalAction} />
    </div>
  );
};

Modal.prototype = {
  children: PropTypes.element,
  id: PropTypes.string,
  onCloseAction: PropTypes.func,
};

export default Modal;
