import * as React from 'react';
import { message } from 'antd';
const UploadAvatar = (props: any) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const { onChange } = props;
  const inputChange = () => {
    let fileReader = new FileReader();
    if (ref.current?.files?.[0]) {
      if (ref.current.files[0].size >= 75 * 1024) {
        message.error('图片大小不得超过75KB');
      } else {
        fileReader.readAsDataURL(ref.current?.files?.[0]);
      }
    }
    fileReader.onload = () => {
      onChange(fileReader.result);
    };
  };
  return (
    <input
      type="file"
      ref={ref}
      onChange={inputChange}
      accept="image/jpg,image/jpeg,image/gif,image/png"
    ></input>
  );
};

export default UploadAvatar;
