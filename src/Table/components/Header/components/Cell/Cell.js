import classes from './Cell.module.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

const Cell = ({
  index,
  minColumnSize,
  setSelectedHeader,
  detectClass,
  value,
  checkUniqueColumn,
  deleteColumn,
  selectedHeader,
  onHeaderEdit,
  tableHeaders
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() =>{
    setInputValue(value);
  }, [tableHeaders])

  const handleChange = (value) => {
    setInputValue(value);
    onHeaderEdit(value);
  }

  const onEdit = (index, event) => {
  const { key } = event;
  if (key === 'Enter') {
    event.preventDefault();
    checkUniqueColumn(index, event.target.value);
    event.currentTarget.blur();
  }
}

  return (
    <th 
      className={classNames(classes.cell, detectClass('tableHeadCell'))}
      style={{ minWidth: `${minColumnSize}px` }}
      onMouseEnter={() => {
        setSelectedHeader(index)
      }}
      onMouseLeave={() => {
        setSelectedHeader(-1)
      }}
    >
      <TextareaAutosize 
        spellCheck="false"
        value={inputValue}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => checkUniqueColumn(index, event.target.value)}
        onKeyDown={(event) => onEdit(index, event)}
        className={classNames(classes.textarea, detectClass('tableHeadTextarea'))}
      />
      {
        index === selectedHeader && (
          <button 
            type="button"
            className={classNames(classes.deleteButton, detectClass('deleteButton'))}
            onClick={() => deleteColumn(index)}
          >
            &#x2715;
          </button>
        )
      }
    </th>
  )
}

export default Cell;