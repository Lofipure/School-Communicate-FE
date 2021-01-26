import * as React from 'react';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';

const ele = React.createElement;

const VditorContainer = (props: any) => {
  const { onChange } = props;
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
      toolbar: [
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
      ],
      input: handleOnChange,
    });
  }, []);
  return ele('div', { id: 'vditor' });
};

export default VditorContainer;
