import React, { ChangeEvent } from 'react';

import MyHeader from '@/Components/MyHeader';
import { Layout, Form, Input, Row, Col, Select, Button } from 'antd';

import './index.less';
interface IRegisterUserInfo {
  name: string;
  studentID: string;
  major: number;
  college: number;
  email: string;
  telephone: string;
}

const RegisterPage = () => {
  const [
    registerUserInfo,
    setRegisterUserInfo,
  ] = React.useState<IRegisterUserInfo>({
    name: '',
    studentID: '',
    college: 0,
    major: 0,
    telephone: '',
    email: '',
  });

  React.useEffect(() => {
    document.title = 'Register';
  }, []);
  const handleUserInfoChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    let ret: IRegisterUserInfo = { ...registerUserInfo };
    ret[type] = e.target.value;
    setRegisterUserInfo(ret);
  };

  return (
    <div className="main-page">
      <Layout>
        <MyHeader type="RegisterPage" />
        <Layout.Content className="register-page-content">
          <div className="register-form-container">
            <Form className="register-form">
              <Row justify="space-around" align="middle">
                <Col span="20">
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Name is required.' }]}
                  >
                    <Input
                      value={registerUserInfo?.name}
                      allowClear
                      onChange={(e) => {
                        handleUserInfoChange(e, 'name');
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="space-around" align="middle">
                <Col span="20">
                  <Form.Item
                    name="studentID"
                    label="StudentID"
                    rules={[
                      { required: true, message: 'Student ID is required.' },
                    ]}
                  >
                    <Input
                      value={registerUserInfo?.studentID}
                      allowClear
                      onChange={(e) => {
                        handleUserInfoChange(e, 'studentID');
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="space-around" align="middle">
                <Col span={20}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Email is required.' },
                      {
                        pattern: /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/,
                        message: 'Check Email.',
                      },
                    ]}
                  >
                    <Input
                      value={registerUserInfo?.email}
                      allowClear
                      onChange={(e) => {
                        handleUserInfoChange(e, 'email');
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="space-around" align="middle">
                <Col span={20}>
                  <Form.Item
                    name="telephone"
                    label="Tel"
                    rules={[
                      { required: true, message: 'Telephone is required.' },
                      { pattern: /^1[3-9]\d{9}$/, message: 'Check Telephone.' },
                    ]}
                  >
                    <Input
                      value={registerUserInfo?.telephone}
                      allowClear
                      onChange={(e) => {
                        handleUserInfoChange(e, 'telephone');
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="space-around" align="middle">
                <Col span={10}>
                  <Form.Item name="college" label="College" required>
                    <Select value={registerUserInfo?.college}></Select>
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item name="major" label="Major" required>
                    <Select value={registerUserInfo?.major}></Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row align="middle" justify="center">
                <Col span="12">
                  <Button type="primary" className="register-form-btn">
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default RegisterPage;
