import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Cell from "./components/Cell";
import classes from "./Header.module.scss";

const Header = ({
  tableHeaders,
  checkUniqueColumn,
  detectClass,
  onHeaderEdit,
  minColumnSize,
  deleteColumn,
  showColNumbers
}) => {
  const [selectedHeader, setSelectedHeader] = useState(-1);

  return (
    <thead className={classNames(detectClass("tableHead"))}>
      <tr className={classNames(classes.tr, detectClass("tableHeadRow"))}>
        {tableHeaders.map((header, index) => {
          return (
            <Cell
              key={header}
              minColumnSize={minColumnSize}
              setSelectedHeader={(value) => setSelectedHeader(value)}
              detectClass={detectClass}
              value={header}
              checkUniqueColumn={checkUniqueColumn}
              deleteColumn={deleteColumn}
              selectedHeader={selectedHeader}
              index={index}
              onHeaderEdit={onHeaderEdit}
              tableHeaders={tableHeaders}
            />
          );
        })}
      </tr>
      <tr>
        {showColNumbers ? tableHeaders.map((item,i) => {
          return <th colSpan={1}>{i+1}</th>
        }): ""}
      </tr> 
    </thead>
  );
};

Header.propTypes = {
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkUniqueColumn: PropTypes.func.isRequired,
  detectClass: PropTypes.func.isRequired,
  onHeaderEdit: PropTypes.func.isRequired,
  minColumnSize: PropTypes.number.isRequired,
  deleteColumn: PropTypes.func.isRequired,
  showColNumbers: PropTypes.bool,
};

export default Header;