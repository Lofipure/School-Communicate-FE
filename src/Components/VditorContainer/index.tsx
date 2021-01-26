import * as React from 'react';
import Vditor from 'vditor';
import 'vditor/src/assets/scss/index.scss';

interface VditorContainerProps {
  value?: string;
  onChange?: (value: string, option: any) => void;
  mode: 'edit' | 'render';
}

const VditorContainer = (props: VditorContainerProps) => {
  const { onChange, value } = props;
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
  const handleOnChange = (value: string, option: any) => {
    onChange?.(value, option);
  };
  React.useEffect(() => {
    if (props.mode === 'edit') {
      new Vditor('vditor', {
        minHeight: 300,
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
    } else {
      // @ts-ignore
      Vditor.preview(divRef.current, value);
    }
  }, [props.value]);
  return <div id="vditor" ref={divRef}></div>;
};

export default VditorContainer;
