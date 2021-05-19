# Description

Using the react-smart-dynamic-table you can dynamically add, edit, delete columns, headers, cells

# Installation 

```npm i react-smart-dynamic-table```

# API

| Property        | Required           | Type  | Description        | Example           |
| ------------- |-------------| -----| ------------- |-------------|
| tableColumns      | yes | arrayof({ header: string, columnData: arrayof(string)}) | initial table data      | ``` tableColumns = {[{ header: 'company', columnData: ['adidas', 'nike', 'puma', 'reebok'] },  { header: 'founded', columnData: ['1949', '1964', '1948', '1958'] }]}```|
| emptyCellPlaceholder      | no      |   string | empty cell placeholder      | ```emptyCellPlaceholder="empty" ```|
| tableClasses | no      |   object | keys are values from STYLING section, values are your custom classes | ``` tableClasses={{  table: classes.table,  addRowButton: classes.addRowButton, sendButton: classes.sendButton }} ```      |
| cellSpacing | no      |    string | value to define gap between cells | ```cellSpacing = "300"```      |
| minColumnSize | no      |    number | value to define minimal size of table columns (default ```300px```) | ````minColumnSize={200}```     |
| onCeilEdit | no      |    function | gets new Table data as a prop, emmits when edit cell | -    |
| onCeilBlur | no      |    function | gets new Table data as a prop, emmits when cell blurs | -    |
| onHeaderEdit | no      | function | gets new Table data as a prop, emmits when edit header | -    |
| onHeaderBlur | no     | function | gets new Table data as a prop, emmits when header blurs | -    |
| onSendData | no      |    function | gets new Table data as a prop, emmits when click send button | -    |

## STYLING:
  ### General Buttons
  * addColumnButton
  * addRowButton
  * sendButton
  ### Modal
  * modalOverlay
  * modal
  * modalText
  * modalInput
  * modalSetButton
  * modalCloseButton
  ### Table
  * table
  * tableHead
  * tableHeadRow
  * tableHeadCell
  * tableHeadTextarea
  * deleteButton
  * tableBody
  * tableBodyRow
  * tableBodyCeilTextarea

# Usage

```javascript
import Table from 'react-smart-dynamic-table'
import classes from './App.module.scss';

function App() {
  const tableColumns = [{
      header: 'name',
      columnData: ['adidas', 'nike', 'puma', 'reebok']
    },
    { 
      header: 'founded', 
      columnData: ['1949', '1964', '1948', '1958'] 
    },
    { 
      header: 'origin', 
      columnData: ['Germany', '', 'Germany', 'USA'] 
    }
  ]

  return (
    <div className="App">
      <Table 
        tableColumns={tableColumns}
        tableClasses={{ 
            table: classes.table, 
            addRowButton: classes.addRowButton,
            sendButton: classes.sendButton
          }}
      />
    </div>
  );
}

export default App;
```

expected result:

![alt text](https://p26.f0.n0.cdn.getcloudapp.com/items/d5u1oGoq/b5f679db-4415-478c-ad39-3e94db4df831.jpg?source=viewer&v=79489c5f5b01e964a459fbe9850f2111)
