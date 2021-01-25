import * as React from 'react';
import { Input, Row, Col } from 'antd';

interface CommentInputProps {
  uId?: string;
  aId?: string;
}

const CommentInput = (props: CommentInputProps) => {
  return (
    <div className="comment-input-container">
      <Input></Input>
    </div>
  );
};

export default CommentInput;
