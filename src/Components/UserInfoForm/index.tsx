import * as React from 'react';
import { Row, Col, Form } from 'antd';

interface UserInfoFormHanle {
  getFieldValues: () => object;
}

export interface UserInfoFormProps {
  className?: string;
  filters: FilterConfig[];
  layout: 'horizontal' | 'inline' | 'vertical';
}

const UserInfoForm = React.forwardRef<UserInfoFormHanle, UserInfoFormProps>(
  (props: UserInfoFormProps, ref) => {
    const [userInfoForm] = Form.useForm();

    const widgetRender = () =>
      props.filters.map((item: FilterConfig) => {
        const { key, label, options, span, widget } = item;
        return (
          <Col span={span} key={key}>
            <Form.Item name={key} label={label} {...options}>
              {widget}
            </Form.Item>
          </Col>
        );
      });

    React.useImperativeHandle(ref, () => ({
      getFieldValues: () => {
        let retData = userInfoForm.getFieldsValue();
        userInfoForm.resetFields();
        return retData;
      },
    }));

    return (
      <Form
        className={props.className}
        layout={props.layout}
        form={userInfoForm}
      >
        <Row justify="center" align="middle">
          {widgetRender()}
        </Row>
      </Form>
    );
  },
);

export default UserInfoForm;
