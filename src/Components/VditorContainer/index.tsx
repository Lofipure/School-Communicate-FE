import * as React from 'react';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';

const ele = React.createElement;
interface VditorContainerProps {
  value?: string;
  onChange?: (value: string, option: any) => void;
  toolbarStatus?: boolean;
}

const VditorContainer = (props: VditorContainerProps) => {
  const { onChange, value = '', toolbarStatus = false } = props;
  const toolbarconfig = toolbarStatus
    ? []
    : [
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
  const handleOnChange = (value: string, option: any) => {
    onChange?.(value, option);
  };
  React.useEffect(() => {
    new Vditor('vditor', {
      minHeight: 300,
      toolbarConfig: {
        pin: true,
      },
      cache: {
        enable: false,
      },
      comment: {
        enable: false,
      },
      mode: 'ir',
      toolbar: toolbarconfig,
      input: handleOnChange,
      value: value,
    });
  }, [props.value]);
  return ele('div', { id: 'vditor' });
};

export default VditorContainer;
