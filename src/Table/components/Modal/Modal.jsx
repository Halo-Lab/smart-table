import React, { useState } from 'react';
import classNames from 'classnames';
import classes from './Modal.module.scss';

export const Modal = ({ 
  headerValue, 
  checkUniqueColumn, 
  index, 
  closeModal,
  detectStyle
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
      className={classes.container} 
      onClick={handleOverlayClick}
      style={detectStyle('modalOverlay')}
    >
      <div className={classes.modal} style={detectStyle('modal')}>
        <p style={detectStyle('modalText')}>
          Column with name <b>{ headerValue }</b> is already exists.
        </p>
        <p style={detectStyle('modalText')}>
          Change column name, please
        </p>
        <input 
          style={detectStyle('modalInput')}
          type="text" 
          value={newValue} 
          onChange={(event) => setNewValue(event.target.value)}
          className={classes.input}
        />
        <div className={classes.buttonsWrapper}>
          <button 
            type="button"
            onClick={() => checkUniqueColumn(index, newValue)}
            className={classNames(classes.button)}
            style={detectStyle('modalSetButton')}
          >
            Set new value
          </button>
          <button 
            type="button"
            onClick={closeModal}
            className={classNames(classes.button)}
            style={detectStyle('modalCloseButton')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}