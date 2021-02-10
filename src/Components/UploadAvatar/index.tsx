import * as React from 'react';
import { Upload, message, Image } from 'antd';
import { UploadChangeParam } from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';

const UploadAvatar = (props: any) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const { onChange } = props;

  const getBase64 = (img: Blob, callback: Function) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUploadHandleFunc = (file: Blob) => {
    const isJpgOrPng = file.type == 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('目前仅支持JPG/PNG格式的文件');
    }
    const isLt2M = file.size / 1024 / 1024 < 0.25;
    if (!isLt2M) {
      message.error('请上传小于256KB的图片');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      if (info.file.originFileObj) {
        getBase64(info.file.originFileObj, (imageUrl: string) => {
          setImageUrl(imageUrl);
          setLoading(false);
          onChange(imageUrl);
        });
      }
    }
  };

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      beforeUpload={beforeUploadHandleFunc}
      onChange={handleChange}
    >
      {imageUrl ? <Image src={imageUrl}></Image> : <UploadOutlined />}
    </Upload>
  );
};

export default UploadAvatar;
