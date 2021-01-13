import * as React from 'react';
import { Table } from 'antd';
import { APIProps } from 'typings';
import { ColumnsType } from 'antd/lib/table';
interface TableProps {
  Api?: APIProps;
  columns: ColumnsType<any>;
}

const TableComponent: React.FC<TableProps> = (props: TableProps) => {
  return <Table bordered columns={props.columns} />;
};

export default TableComponent;
