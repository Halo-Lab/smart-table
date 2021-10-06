export const getInitialProps = (tableColumns) => {
  const headersNew = [];
  const dataNew = [];
  tableColumns.forEach(column => {
   headersNew.push(column.header);
   column.columnData.forEach((item, index) => {
     if (!dataNew[index]) {
       dataNew[index] = {}
     }
     dataNew[index][column.header] = item
   })
  });

  return { tableHeaders: headersNew, tableData: dataNew }
}


const romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

export const convertToRoman = (num) =>  {
  if (num === 0) {
    return '';
  }
  for (let i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}