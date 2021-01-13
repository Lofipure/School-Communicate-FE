import * as React from 'react';
import { Select } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

export interface SelectCompoentProps {
  Api: AxiosRequestConfig;
  allowClear?: boolean;
  placeholder?: string;
  mode: 'multiple' | 'tags';
}

const SelectCompoent: React.FC<SelectCompoentProps> = (
  props: SelectCompoentProps,
) => {
  const [loadintStatus, setLoadingStatus] = React.useState<boolean>(true);
  const [options, setOptions] = React.useState<
    { label: string; value: string }[]
  >();
  React.useEffect(() => {
    axios({
      url: props.Api.url,
      method: props.Api.method,
    })
      .then((res) => {
        setOptions(res.data);
      })
      .finally(() => {
        setLoadingStatus(false);
      });
  }, []);
  return (
    <Select
      loading={loadintStatus}
      options={options}
      mode={props.mode ? props.mode : 'tags'}
    ></Select>
  );
};

export default SelectCompoent;
