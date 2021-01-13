import * as React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import axios, { AxiosRequestConfig } from 'axios';

interface TableProps {
  Api?: AxiosRequestConfig;
  columns: ColumnsType<any>;
}

const TableComponent: React.FC<TableProps> = (props: TableProps) => {
  const [data, setData] = React.useState<Array<any>>();

  React.useEffect(() => {
    axios({
      method: props.Api?.method,
      url: props.Api?.url,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return <Table bordered columns={props.columns} dataSource={data} />;
};

export default TableComponent;
