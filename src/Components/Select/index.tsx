// // import * as React from 'react';
// // import { Select } from 'antd';
// // import axios, { AxiosRequestConfig } from 'axios';

// // export interface SelectCompoentProps {
// //   Api: AxiosRequestConfig;
// //   allowClear?: boolean;
// //   placeholder?: string;
// //   mode: 'multiple' | 'tags';
// // }

// // export interface SelectCompoentHandle {}

// // const SelectCompoent = React.forwardRef<
// //   SelectCompoentHandle,
// //   SelectCompoentProps
// // >((props: SelectCompoentProps, ref) => {
// //   const [loadingStatus, setLoadingStatus] = React.useState<boolean>(true);
// //   const [options, setOptions] = React.useState<
// //     { label: string; value: string }[]
// //   >();

// //   React.useEffect(() => {
// //     axios({
// //       url: props.Api.url,
// //       method: props.Api.method,
// //     })
// //       .then((res) => {
// //         setOptions(res.data);
// //       })
// //       .finally(() => {
// //         setLoadingStatus(false);
// //         console.log(options);
// //       });
// //   }, [props.Api]);

// //   React.useImperativeHandle(ref, () => ({}));
// //   return (
// //     <Select
// //       loading={loadingStatus}
// //       options={options}
// //       mode={props.mode ? props.mode : 'tags'}
// //       allowClear={props.allowClear}
// //     />
// //   );
// // });

// // export default SelectCompoent;
// import * as React from 'react';
// import { Select, Spin } from 'antd';
// import { SelectProps } from 'antd/lib/select';
// import axios, { AxiosRequestConfig } from 'axios';

// type FieldType = {
//   valueField: string;
//   labelField: string;
// };

// type FielterFunc = (inputValue: string, option: any) => boolean;

// interface SelectCompoentProps extends SelectProps<any> {
//   apiConfig?: AxiosRequestConfig;
// }

// const DEFAULT_FELDS = {
//   valueField: 'id',
//   labelField: 'name',
// };

// const SelectCompoent = (props: SelectCompoentProps) => {
//   const [loading, setLoading] = React.useState<boolean>(false);

//   const fetchData = () => {
//     if (!props.apiConfig) return;
//     setLoading(true);
//     axios({
//       method: props.apiConfig.method,
//       url: props.apiConfig.url,
//     }).then((res) => {
//       console.log(res.data);
//     });
//   };
// };
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
        console.log(options);
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
