import * as React from 'react';
import { Cascader } from 'antd';
import { CascaderOptionType, CascaderProps } from 'antd/lib/cascader';

export interface CascaderHandler {
  getFinalValue: () => string[];
}

export interface CascaderOptionsProps extends CascaderOptionType {
  label: string;
  value: string;
  children?: CascaderOptionsProps[];
}
interface MyCascaderProps extends CascaderProps {
  options: CascaderOptionsProps[];
  APIConfig?: APIProps;
}

const MyCascader = React.forwardRef<CascaderHandler, MyCascaderProps>(
  (props: MyCascaderProps, ref) => {
    const [options, setOptions] = React.useState<CascaderOptionsProps[]>();
    const [finalValue, setFinalValue] = React.useState<string[]>([]);

    React.useEffect(() => {
      if (!props.APIConfig) return;
    }, []);

    const handleOnChange = () => {
      console.log('s');
    };
    React.useImperativeHandle(ref, () => ({
      getFinalValue: () => finalValue,
    }));
    return <Cascader options={options || props.options} value={finalValue} />;
  },
);

export default MyCascader;
