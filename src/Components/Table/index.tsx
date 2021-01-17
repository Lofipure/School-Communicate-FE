import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import axios, { AxiosRequestConfig } from 'axios';

interface TableProps {
  Api?: AxiosRequestConfig;
  columns: ColumnsType<any>;
  rowKey: string;
}

const TableComponent: React.FC<TableProps> = (props: TableProps) => {
  const [data, setData] = React.useState<Array<any>>();
  const [tableStatus, setTableStatus] = React.useState<boolean>(true);

  React.useEffect(() => {
    axios({
      method: props.Api?.method,
      url: props.Api?.url + `?email=${localStorage.getItem('email')}`,
    })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setTableStatus(false);
      });
  }, []);
  return (
    <Table
      bordered
      rowKey={props.rowKey}
      columns={props.columns}
      dataSource={data}
      loading={tableStatus}
    />
  );
};

export default TableComponent;
