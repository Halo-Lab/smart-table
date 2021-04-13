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