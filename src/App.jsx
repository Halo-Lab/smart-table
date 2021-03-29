import React from 'react';
import styles from './App.module.scss';
import { Table } from './Table/Table';

function App() {
  const headers = ['name', 'second', 'third', 'fourth'];
  const data = [
    { name: 'adidas', second: 21, third: 31 },
    { name: 'nike', second: 22, third: 32, fourth: 42 },
    { name: 'puma', second: 23, third: 33, fourth: 43 },
    { name: 'reebok', second: 24, fourth: 44 },
  ];

  const emptyCeil = '';

  const styleObj = {
    addColumnButton: {
      backgroundColor: '#000',
      border: 'none',
      width: '24px',
      height: '24px',
      top: '3px',
      right: '2px',
      color: 'white',
      zIndex: 3
    },
  };

  const onCeilEdit = (data) => {
    console.log(data, 90)
  }

  const onCeilBlur = (data) => {
    console.log('blur', data)
  }

  const onHeaderBlur = (data) => {
    console.log(data)
  }

  const onHeaderEdit = (data) => {
    console.log(data)
  }
  
  return (
    <div className={styles.btn}>
      <Table 
        headers={headers} 
        data={data} 
        emptyCeil={emptyCeil} 
        styleObj={styleObj} 
        onCeilEdit={onCeilEdit}
        onCeilBlur={onCeilBlur}
        onHeaderBlur={onHeaderBlur}
        onHeaderEdit={onHeaderEdit}
      />
    </div>
  );
}

export default App;

//detect styleObj.addButton on is it function or number 
// styleobj.addButton key is number - error
//add pagination
//add sorting