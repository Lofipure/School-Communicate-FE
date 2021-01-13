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
} from 'antd';
import { getUserByEmailApi, updateUserInfo } from '@/Api';
import TableComponent from '@/Components/Table';
import axios from 'axios';

import {
  getUserInfo,
  DescriptionItemProps,
  modifiedFilterConfig,
  tagTableColumn,
  articleTableColumn,
  addTagFormColumn,
  addArticleFormColumn,
} from './aboutPage.config';
import InfoForm from '@/Components/InfoForm';

import './index.less';
import { UserInfo } from 'typings';
import { PLACEHOLDER } from '@/constant';

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
  const [
    addArticleDrawerStatus,
    setAddArticleDrawerStatus,
  ] = React.useState<boolean>(false);
  const [addTagDrawerStatus, setAddTagDrawerStatus] = React.useState<boolean>(
    false,
  );
  const addTagForm = React.useRef<React.ElementRef<typeof InfoForm>>(null);
  const addArticleForm = React.useRef<React.ElementRef<typeof InfoForm>>(null);
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
        setUserInfo(userInfoTemp);
        setRenderItem(getUserInfo(res.data[0]));
        setUserName(res.data[0].name);
      })
      .finally(() => {
        setUserInfoCardStatus(false);
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
        height={'60vh'}
        title="新建文章"
        visible={addArticleDrawerStatus}
        placement="bottom"
        onClose={() => {
          setAddArticleDrawerStatus(false);
        }}
        footer={
          <Button.Group>
            <Button type="primary">新增</Button>
            <Button
              onClick={() => {
                setAddArticleDrawerStatus(false);
              }}
            >
              取消
            </Button>
          </Button.Group>
        }
      >
        <InfoForm
          filters={addArticleFormColumn}
          layout="horizontal"
          ref={addArticleForm}
        />
      </Drawer>
      <Drawer
        title="新增标签"
        visible={addTagDrawerStatus}
        placement="top"
        onClose={() => {
          setAddTagDrawerStatus(false);
        }}
        footer={
          <Button.Group>
            <Button type="primary">新增</Button>
            <Button
              onClick={() => {
                setAddTagDrawerStatus(false);
              }}
            >
              关闭
            </Button>
          </Button.Group>
        }
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
                style={{ textAlign: 'center', margin: '0 auto' }}
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
          <TabPane key={1} tab="所有标签">
            <TableComponent columns={tagTableColumn} />
            <Button
              className="tabpane-button"
              type="primary"
              onClick={() => {
                setAddTagDrawerStatus(true);
              }}
            >
              新增标签
            </Button>
          </TabPane>
          <TabPane key={2} tab="我的文章">
            <TableComponent columns={articleTableColumn} />
            <Button
              className="tabpane-button"
              type="primary"
              onClick={() => {
                setAddArticleDrawerStatus(true);
              }}
            >
              新建文章
            </Button>
          </TabPane>
        </Tabs>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
