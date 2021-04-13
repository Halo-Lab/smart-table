import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import TextareaAutosize from 'react-textarea-autosize';
import classes from './Header.module.scss';

const Header = ({ 
  tableHeaders, checkUniqueColumn, detectClass, onHeaderEdit, minColumnSize, deleteColumn 
}) => {
  const [headers, setHeaders] = useState(tableHeaders);
  const [selectedHeader, setSelectedHeader] = useState(-1);

  const onEdit = (index, event) => {
    const { key } = event;
    if (key === 'Enter') {
      event.preventDefault();
      checkUniqueColumn(index, event.target.value);
      event.currentTarget.blur();
    }
  }

  const handleChange = (event, index) => {
    const newHeaders = [...headers];
    newHeaders[index] = event.target.value;
    setHeaders([...newHeaders]);
    onHeaderEdit(newHeaders)
    event.target.focus();
  }

  useEffect(() => {
    setHeaders([...tableHeaders]);
  }, [tableHeaders]);

  return (
    <thead className={classNames(detectClass('tableHead'))}>
      <tr 
        className={classNames(detectClass('tableHeadRow'))} 
      >
        {
          headers.map((header, index) => {
            return (
              <th 
                key={header} 
                className={classNames(classes.ceil, detectClass('tableHeadCeil'))}
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
                  value={header}
                  onChange={(event) => handleChange(event, index)}
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
          })
        }
      </tr>
    </thead>
  )
}

Header.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired, 
  checkUniqueColumn: PropTypes.func.isRequired, 
  detectClass: PropTypes.func.isRequired, 
  onHeaderEdit: PropTypes.func.isRequired, 
  minColumnSize: PropTypes.number.isRequired, 
  deleteColumn: PropTypes.func.isRequired
}

export default Header;