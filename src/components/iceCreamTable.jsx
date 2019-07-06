import React, { Component } from 'react';
import Table from "./common/table";

class IceCreamTable extends Component {

  columns = [
    { path: "name", label: "Flavor" },
    { path: "type.name", label: "Type"},
    { path: "amountInStock", label: "Amount"},
    { path: "price", label: "Price"}
  ];

  render() { 
    const { flavors, onSort, sortColumn } = this.props;
    return ( 
      <Table
      columns={this.columns}
      data={flavors}
      sortColumn={sortColumn}
      onSort={onSort}
      />
     );
  }
}
 
export default IceCreamTable;