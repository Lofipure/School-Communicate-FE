import * as React from 'react';
import { Row, Col, Form } from 'antd';
import { FilterConfig, UserInfo } from 'typings';
import { ColProps } from 'antd/lib/col';

interface UserInfoFormHanle {
  getFieldValues: () => object;
  resetForm: () => void;
}

export interface UserInfoFormProps {
  className?: string;
  filters: FilterConfig[];
  layout: 'horizontal' | 'inline' | 'vertical';
  initialValues?: any;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
}

const UserInfoForm = React.forwardRef<UserInfoFormHanle, UserInfoFormProps>(
  (props: UserInfoFormProps, ref) => {
    const [userInfoForm] = Form.useForm();

    const widgetRender = () =>
      props.filters.map((item: FilterConfig) => {
        const { key, label, options, span, widget } = item;
        return (
          <Col span={span} key={key}>
            <Form.Item name={key} label={label} {...options} colon={false}>
              {widget}
            </Form.Item>
          </Col>
        );
      });

    React.useImperativeHandle(ref, () => ({
      getFieldValues: () => {
        let retData = userInfoForm.getFieldsValue();
        return retData;
      },
      resetForm: () => {
        userInfoForm.resetFields();
      },
    }));

    return (
      <Form
        className={props.className}
        layout={props.layout}
        form={userInfoForm}
        initialValues={props.initialValues}
        labelCol={props.labelCol}
        wrapperCol={props.wrapperCol}
      >
        <Row justify="space-around" align="middle">
          {widgetRender()}
        </Row>
      </Form>
    );
  },
);

export default UserInfoForm;
