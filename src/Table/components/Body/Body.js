/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from "prop-types";
import classNames from 'classnames';
import classes from './Body.module.scss';

const Body = ({ 
  tableData, tableHeaders, emptyCellPlaceholder, editCeil, detectClass,
  onCeilBlur, minColumnSize, deleteRow
}) => {
  const [selectedRow, setSelectedRow] = useState(-1);

  return (
    <tbody className={detectClass('tableBody')}>
      {
        tableData.map((item, i) => {
          return (
            <tr 
              key={i} 
              className={classNames(classes.tr, detectClass('tableBodyRow'))}
              onMouseEnter={() => {
                setSelectedRow(i)
              }}
              onMouseLeave={() => {
                setSelectedRow(-1)
              }}
            >
              {
                tableHeaders.map((header, j) => {
                  const value = item[header] || emptyCellPlaceholder;
                  return (
                    <td key={j + i + header} style={{ minWidth: `${minColumnSize}px` }} className={detectClass('tableBodyCeil')}>
                      <TextareaAutosize 
                        className={classNames(classes.textarea, detectClass('tableBodyCeilTextarea'))}
                        value={value} 
                        onChange={(event) => editCeil(header, event.target.value, i)}
                        onBlur={() => onCeilBlur(tableData)}
                      />
                    </td>
                  )
                })
              }
              {
                i === selectedRow && (
                  <button 
                    type="button"
                    className={classNames(classes.deleteRowButton, detectClass('deleteRowButton'))}
                    onClick={() => deleteRow(i)}
                  >
                    &#x2715;
                  </button>
                )
              }
            </tr>
          )
        })
      }
    </tbody>
  )
}

Body.propTypes = {
  emptyCellPlaceholder: PropTypes.string.isRequired,
  editCeil: PropTypes.func.isRequired,
  detectClass: PropTypes.func.isRequired,
  onCeilBlur: PropTypes.func.isRequired,
  minColumnSize: PropTypes.number.isRequired,
  tableHeaders: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Body;