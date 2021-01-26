import * as React from 'react';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';
import { Spin } from 'antd';

interface VditorContainerProps {
  value?: string;
  onChange?: (value: string, option: any) => void;
  mode: 'edit' | 'render';
}

const VditorContainer = (props: VditorContainerProps) => {
  const { onChange, value } = props;
  const [loading, setLoading] = React.useState<boolean>(false);
  const divRef = React.useRef<HTMLDivElement>(null);
  const toolbarconfig = [
    'outline',
    '|',
    'emoji',
    'headings',
    'bold',
    'strike',
    '|',
    'code',
    'link',
    'undo',
    'redo',
    'indent',
    'outdent',
    'fullscreen',
    'ordered-list',
  ];
  const handleOnChange = (value: string, option?: any) => {
    onChange?.(value, option);
  };
  React.useEffect(() => {
    if (props.mode === 'edit') {
      new Vditor('vditor', {
        minHeight: 300,
        comment: {
          enable: false,
        },
        mode: 'ir',
        toolbar: toolbarconfig,
        blur: handleOnChange,
        value: value,
        cache: {
          enable: false,
        },
      });
    } else {
      setLoading(true);
      // @ts-ignore
      Vditor.preview(divRef.current, value, {}).then(() => {
        setLoading(false);
      });
    }
  }, [props.value]);
  return (
    <Spin spinning={loading}>
      <div id="vditor" ref={divRef}></div>
    </Spin>
  );
};

export default VditorContainer;
