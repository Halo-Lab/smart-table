## To pass custom styles use styleObj and keys:
  * table
  * tableBody
  * tableBodyRow
  * tableBodyCeil
  * tableBodyTextarea
  * tableHead
  * tableHeadRow
  * tableHeadCeil
  * tableHeadTextarea
  * addRowButton
  * addColumnButton
  * sendButton
  * modal
  * modalOverlay
  * modalCloseButton
  * modalSetButton
  * modalInput

# Parametrs
  * emptyCeil
  * cellSpacing
  * headers (array of strings):
    *['column1', 'column2']*
  * data:
    *{ column1: 'value11', column2: 'value21' }*
    *{ column1: 'value12', column2: 'value22' }*

# Functions
  * onCeilEdit => returns new tableData
  * onCeilBlur => returns new tableData
  * onHeaderEdit => returns new tableData
  * onHeaderBlur => returns new tableData