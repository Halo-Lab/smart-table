import React, { useState } from 'react';
import classNames from 'classnames';

import style from './Table.module.scss';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Modal } from './components/Modal/Modal';

export const Table = ({ 
  headers = [], 
  data = [], 
  emptyCeil = '',
  styleObj = {},
  cellSpacing = "0",
  minColumnSize = 300,
  onCeilEdit = (data) => {},
  onCeilBlur = (data) => {},
  onHeaderEdit = (data) => {},
  onHeaderBlur = (data) => {},
}) => {
  const [tableHeaders, setTableHeaders] = useState([...headers]);
  const [tableData, setTableData] = useState(data);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeHeaderValue, setActiveHeaderValue] = useState('');
  const [activeHeaderIndex, setActiveHeaderIndex] = useState(0);

  const checkUniqueColumn = (index, value) => {
    const isValue = !!value.trim().length;
    if (!isValue) {
      return
    }
    const isHeaderExists = tableHeaders.findIndex(header => header === value);
    if (isHeaderExists === index) {
      return;
    }
    if (isHeaderExists !== -1) {
      setActiveHeaderValue(value);
      setActiveHeaderIndex(index);
      setIsModalVisible(true);
      return;
    }
    editHeaderTitle(index, value);
    setIsModalVisible(false);
  }

  const handleClose = () => {
    setTableHeaders([...tableHeaders]);
    setIsModalVisible(false);
  }

  const editCeil = (head, value, index) => {
    const newTableData = JSON.parse(JSON.stringify(tableData));
    newTableData[index][head] = value;
    setTableData(newTableData);
    onCeilEdit(newTableData);
  }

  const sendData = () => {
    const editedData = {
      headers: [...tableHeaders],
      data: tableData
    };
    return editedData;
  };

  const addColumn = () => {
    setTableHeaders([...tableHeaders, `Column ${tableHeaders.length + 1}`]);
  };

  const addRow = () => {
    let newRow = {};
    tableHeaders.forEach(header => {
      newRow[header] = '';
    });
    setTableData([...tableData, newRow]);
  };

  const deleteColumn = (index) => {
    const activeHeaderTitle = headers[index];
    const newTableData = JSON.parse(JSON.stringify(tableData));
    newTableData.forEach(item => {
      delete item[activeHeaderTitle]
    })
    const newHeaders = [...tableHeaders];
    newHeaders.splice(index, 1);
    setTableData(newTableData);
    setTableHeaders(newHeaders);
  }

  const editHeaderTitle = (index, value) => {
    const newHeaders = [...tableHeaders];
    newHeaders[index] = value;
    setTableHeaders([...newHeaders]);
    const headerToEdit = tableHeaders[index];
    const newTableData = JSON.parse(JSON.stringify(tableData));
    newTableData.forEach(item => {
      item[value] = item[headerToEdit];
      delete item[headerToEdit];
    })
    setTableData(newTableData);
    onHeaderBlur({data: newTableData, headers: newHeaders});
  };

  const detectStyle = (value) => {
    return styleObj[value] ? styleObj[value] : {};
  }

  return (
    <div className={style.container}>
      <button 
        type="button" 
        onClick={addColumn} 
        style={detectStyle('addColumnButton')}
        className={classNames(style.addButton)}
      >
          +
      </button>
      <div className={style.wrapper}>
        <table 
          className={style.table} 
          style={detectStyle('table')} 
          cellSpacing={cellSpacing}
        >
          <Header 
            tableHeaders={tableHeaders} 
            checkUniqueColumn={checkUniqueColumn} 
            addColumn={addColumn}
            detectStyle={detectStyle}
            onHeaderEdit={onHeaderEdit}
            deleteColumn={deleteColumn}
            minColumnSize={minColumnSize}
          />
          <Body 
            tableData={tableData}
            editCeil={editCeil}
            tableHeaders={tableHeaders}
            emptyCeil={emptyCeil}
            detectStyle={detectStyle}
            onCeilBlur={onCeilBlur}
            minColumnSize={minColumnSize}
          />
        </table>
      </div>
      <button 
        className={style.addRowButton}
        onClick={addRow}
        style={detectStyle('addRowButton')}
      >
        Add row
      </button>
      {
        isModalVisible && (
          <Modal 
            index={activeHeaderIndex}
            headerValue={activeHeaderValue} 
            checkUniqueColumn={checkUniqueColumn}
            closeModal={handleClose}
            detectStyle={detectStyle}
          />
        )
      }
      <button 
        type='button' 
        onClick={sendData}
        style={detectStyle('sendButton')}
      >
        Send data to user
      </button>
    </div>
  )
}


///delete column