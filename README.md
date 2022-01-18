# Description

Using the react-smart-dynamic-table you can dynamically add, edit, delete columns, headers, cells

# Demo

[DEMO LINK](https://codesandbox.io/s/nifty-jennings-8cu39?file=/src/App.js)

# Installation 

```npm i react-smart-dynamic-table```

# API

| Property        | Required           | Type  | Description        | Example           |
| ------------- |-------------| -----| ------------- |-------------|
| tableColumns      | yes | arrayof({ header: string, columnData: arrayof(string)}) | initial table data      | ``` tableColumns = {[{ header: 'company', columnData: ['adidas', 'nike', 'puma', 'reebok'] },  { header: 'founded', columnData: ['1949', '1964', '1948', '1958'] }]}```|
| emptyCellPlaceholder      | no      |   string | empty cell placeholder      | ```emptyCellPlaceholder="empty" ```|
| tableClasses | no      |   object | keys are values from STYLING section, values are your custom classes, or array of classes | ``` tableClasses={{  table: classes.table,  addRowButton: classes.addRowButton, sendButton: [classes.sendButton, classes.mt] }} ```      |
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
  * container
  * table
  * tableHead
  * tableHeadRow
  * tableHeadCell
  * tableHeadTextarea
  * deleteButton
  * deleteRowButton
  * tableBody
  * tableBodyRow
  * tableBodyCeilTextarea

# Usage

### App.js

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
            container: classes.container, 
            addRowButton: classes.addRowButton,
             sendButton: [classes.sendButton, classes.mt]
          }}
      />
    </div>
  );
}

export default App;
```

### App.module.scss

```
  .addRowButton {
    color: red;
  }

  .sendButton {
    background-color: black;
    color: white;
  }

  .mt {
    margin-top: 30px;
  }

  .container {
    margin-top: 20px;
  }
```
expected result:

![alt text](/public/result.jpg)

## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
