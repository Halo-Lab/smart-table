import React from 'react';

import style from './Body.module.scss';
import TextareaAutosize from 'react-textarea-autosize';

export const Body = ({ 
  tableData, tableHeaders, emptyCeil, editCeil, detectStyle,
  onCeilBlur, minColumnSize
}) => {
  return (
    <tbody style={detectStyle('tableBody')}>
      {
        tableData.map((item, i) => {
          return (
            <tr key={i} style={detectStyle('tableBodyRow')}>
              {
                tableHeaders.map((header, j) => {
                  const value = item[header] ? item[header] : emptyCeil;
                  return (
                    <td key={j + i + header} style={{...detectStyle('tableBodyCeil'), minWidth: `${minColumnSize}px` }}>
                      <TextareaAutosize 
                        className={style.textarea}
                        style={detectStyle('tableBodyCeilTextarea')}
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