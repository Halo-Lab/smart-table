/* eslint-disable no-sparse-arrays */ 

import React from 'react';
import classes from './App.module.scss';
import { Table } from './Table/Table';

function App() {
  const tableColumns = [{
     header: 'name',
     columnData: ['adidas', 'nike', 'puma', 'reebok']
   },{
     header: 'second',
     columnData: [21, 22, 23, 24]
   },{
     header: 'third',
     columnData: [31, 32, 33]
   },
   {
     header: 'fourth',
     columnData: [, 42, 43, 44]
   }]

  const emptyCellPlaceholder = '';

  const onCeilEdit = (value) => {
    console.log(value, 90)
  }

  const onCeilBlur = (value) => {
    console.log('blur', value)
  }

  const onHeaderBlur = (value) => {
    console.log(value)
  }

  const onHeaderEdit = (value) => {
    console.log(value)
  }
  
  return (
    <div>
      <Table 
        tableColumns={tableColumns}
        tableClasses={{ 
            table: classes.table, 
            addRowButton: classes.addRowButton,
            sendButton: classes.sendButton
          }}
        emptyCellPlaceholder={emptyCellPlaceholder} 
        onCeilEdit={onCeilEdit}
        onCeilBlur={onCeilBlur}
        onHeaderBlur={onHeaderBlur}
        onHeaderEdit={onHeaderEdit}
      />
    </div>
  );
}

export default App;
