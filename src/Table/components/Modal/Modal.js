import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import classes from './Modal.module.scss';

const Modal = ({ 
  headerValue, 
  checkUniqueColumn, 
  index, 
  closeModal,
  detectClass
}) => {
  const [newValue, setNewValue] = useState(headerValue);

  const handleOverlayClick = (event) => {
    const element = event.target;
    const overlay = document.querySelector(`.${classes.container}`);
    if (element === overlay) {
      closeModal();
    }
  }

  return (
    <div 
      className={classNames(classes.container, detectClass('modalOverlay'))} 
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayClick}
      role="presentation"
    >
      <div className={classNames(classes.modal, detectClass('modal'))}>
        <p className={classNames(detectClass('modalText'))}>
          Column with name <b>{ headerValue }</b> is already exists.
        </p>
        <p className={classNames(detectClass('modalText'))}>
          Change column name, please
        </p>
        <input 
          className={classNames(detectClass('modalInput'), classes.input)}
          type="text" 
          value={newValue} 
          onChange={(event) => setNewValue(event.target.value)}
        />
        <div className={classes.buttonsWrapper}>
          <button 
            type="button"
            onClick={() => checkUniqueColumn(index, newValue)}
            className={classNames(classes.button, detectClass('modalSetButton'))}
          >
            Set new value
          </button>
          <button 
            type="button"
            onClick={closeModal}
            className={classNames(classes.button, detectClass('modalCloseButton'))}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  headerValue: PropTypes.string.isRequired,
  checkUniqueColumn: PropTypes.func.isRequired, 
  index: PropTypes.number.isRequired, 
  closeModal: PropTypes.func.isRequired,
  detectClass: PropTypes.func.isRequired
}

export default Modal;