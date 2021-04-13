/* eslint react/no-array-index-key: 0 */
import React from 'react';

import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from "prop-types";
import classNames from 'classnames';
import classes from './Body.module.scss';

const Body = ({ 
  tableData, tableHeaders, emptyCellPlaceholder, editCeil, detectClass,
  onCeilBlur, minColumnSize
}) => {
  return (
    <tbody className={detectClass('tableBody')}>
      {
        tableData.map((item, i) => {
          return (
            <tr key={i} className={detectClass('tableBodyRow')}>
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