import * as React from 'react';
import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';
import axios, { AxiosRequestConfig } from 'axios';

type FieldsType = {
  label: string;
  value: string;
};

interface SelectCompoentProps extends SelectProps<any> {
  Api: AxiosRequestConfig;
  mode: 'multiple' | 'tags';
}

const SelectCompoent = (props: SelectCompoentProps) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<FieldsType[]>();
  const { onChange } = props;

  const handleOnChange = (value: string, option: any) => {
    onChange?.(value, option);
  };
  const fetchData = () => {
    setLoading(true);
    axios({
      url: props.Api.url,
      method: props.Api.method,
    })
      .then((res) => {
        setOptions(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, [props.Api]);

  return (
    <Select
      mode={props.mode}
      allowClear
      loading={loading}
      maxTagCount={1}
      onChange={handleOnChange}
    >
      {options?.map((item) => (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectCompoent;
