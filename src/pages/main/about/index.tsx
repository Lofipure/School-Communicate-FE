import * as React from 'react';
import {
  Button,
  Descriptions,
  Typography,
  Modal,
  Skeleton,
  message,
  Tabs,
  Drawer,
  Row,
  Col,
} from 'antd';
import {
  getUserByEmailApi,
  updateUserInfo,
  createTag,
  getAllTagDetailInfo,
  getUserArticle,
} from '@/Api';
import TableComponent from '@/Components/Table';
import axios from 'axios';

import {
  getUserInfo,
  DescriptionItemProps,
  modifiedFilterConfig,
  tagTableColumn,
  articleTableColumn,
  addTagFormColumn,
} from './aboutPage.config';
import InfoForm from '@/Components/InfoForm';
import PersonalData from './Components/PersonData';

import './index.less';
import { UserInfo } from 'typings';
import { PLACEHOLDER } from '@/constant';
import { history } from 'umi';
import { TagOutlined, BookOutlined, DatabaseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const AboutPage = () => {
  const [renderItem, setRenderItem] = React.useState<DescriptionItemProps[]>(
    [],
  );
  const [modifiedModalStatus, setModifiedModalStatus] = React.useState<boolean>(
    false,
  );
  const [userInfo, setUserInfo] = React.useState<UserInfo>();
  const [userInfoCardStatus, setUserInfoCardStatus] = React.useState<boolean>(
    true,
  );
  const [username, setUserName] = React.useState<string>('');
  const modifiedForm = React.useRef<React.ElementRef<typeof InfoForm>>(null);

  const [addTagDrawerStatus, setAddTagDrawerStatus] = React.useState<boolean>(
    false,
  );
  const addTagForm = React.useRef<React.ElementRef<typeof InfoForm>>(null);
  const updateShowData = () => {
    axios({
      url: getUserByEmailApi.url + `?email=${localStorage.getItem('email')}`,
      method: getUserByEmailApi.method,
    })
      .then((res) => {
        let userInfoTemp = res.data[0];
        userInfoTemp.collegeAndMajor = [
          userInfoTemp.college.toString(),
          userInfoTemp.major.toString(),
        ];
        userInfoTemp.location = JSON.parse(userInfoTemp.location);
        console.log(userInfo);
        setUserInfo(userInfoTemp);
        setRenderItem(getUserInfo(res.data[0]));
        setUserName(res.data[0].name);
      })
      .finally(() => {
        setUserInfoCardStatus(false);
      });
  };

  const addNewTag = () => {
    axios({
      url: createTag.url,
      method: createTag.method,
      data: addTagForm.current?.getFieldValues(),
    })
      .then((res) => {
        res.data ? message.success('添加成功') : message.error('标签已存在');
      })
      .finally(() => {
        setAddTagDrawerStatus(false);
        addTagForm.current?.resetForm();
        setTimeout(() => {
          location.reload();
        }, 500);
      });
  };

  React.useEffect(() => {
    updateShowData();
  }, []);

  const modifiedUserInfo = () => {
    axios({
      url: updateUserInfo.url,
      method: updateUserInfo.method,
      data: modifiedForm.current?.getFieldValues(),
    })
      .then((res) => {
        res.data ? message.success('修改成功') : message.error('修改失败');
        modifiedForm.current?.resetForm();
      })
      .finally(() => {
        setModifiedModalStatus(false);
        updateShowData();
      });
  };
  return (
    <React.Fragment>
      <Drawer
        title="新增标签"
        height={'30vh'}
        visible={addTagDrawerStatus}
        placement="top"
        onClose={() => {
          setAddTagDrawerStatus(false);
        }}
        footer={
          <React.Fragment>
            <Button type="primary" className="add-form-btn" onClick={addNewTag}>
              新增
            </Button>
            <Button
              className="add-form-btn"
              onClick={() => {
                setAddTagDrawerStatus(false);
              }}
            >
              关闭
            </Button>
          </React.Fragment>
        }
        footerStyle={{
          textAlign: 'center',
        }}
      >
        <InfoForm
          filters={addTagFormColumn}
          layout="horizontal"
          ref={addTagForm}
        />
      </Drawer>
      <div className="about-page-item">
        <Modal
          visible={modifiedModalStatus}
          title={`修改${username}的信息`}
          closable
          okText="修改"
          cancelText="取消"
          onCancel={() => {
            setModifiedModalStatus(false);
          }}
          onOk={modifiedUserInfo}
        >
          <InfoForm
            ref={modifiedForm}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={userInfo}
            filters={modifiedFilterConfig}
            layout="horizontal"
          />
        </Modal>
        <Skeleton loading={userInfoCardStatus}>
          <Descriptions
            className="about-page-info-descriptions-container"
            title={
              <Typography.Text
                style={{
                  textAlign: 'center',
                  margin: '0 auto',
                }}
              >
                {username + '的个人信息'}
              </Typography.Text>
            }
            extra={
              <Button
                type="primary"
                onClick={() => {
                  setModifiedModalStatus(true);
                }}
              >
                修改信息
              </Button>
            }
            bordered
          >
            {renderItem.map((item, key) => (
              <Descriptions.Item
                label={item.label}
                key={item.label}
                span={item.span}
              >
                {item.content || PLACEHOLDER}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Skeleton>
      </div>
      <div className="about-page-item">
        <Tabs>
          <TabPane
            key={1}
            tab={
              <span>
                <TagOutlined />
                <span>所有标签</span>
              </span>
            }
          >
            <Button
              className="tabpane-button"
              type="primary"
              onClick={() => {
                setAddTagDrawerStatus(true);
              }}
            >
              新增标签
            </Button>
            <TableComponent
              rowKey={'tName'}
              columns={tagTableColumn}
              Api={getAllTagDetailInfo}
            />
          </TabPane>
          <TabPane
            key={2}
            tab={
              <span>
                <BookOutlined />
                <span>我的文章</span>
              </span>
            }
          >
            <Button
              className="tabpane-button"
              type="primary"
              onClick={() => {
                history.push('/article/add');
              }}
            >
              新建文章
            </Button>
            <TableComponent
              columns={articleTableColumn}
              rowKey={'articleTitle'}
              Api={getUserArticle}
            />
          </TabPane>
          <TabPane
            key={3}
            tab={
              <span>
                <DatabaseOutlined />
                <span>我的数据</span>
              </span>
            }
          >
            <PersonalData email={localStorage.getItem('email') || ''} />
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
